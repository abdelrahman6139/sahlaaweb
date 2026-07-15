import "server-only";
import { promises as fs } from "fs";
import path from "path";
import type { Project } from "@/lib/projectMeta";

/**
 * Data-access seam. Today this reads/writes JSON files (fine for local dev and
 * read-only production). Swap the bodies here for Vercel KV / Postgres / Turso
 * to make writes host-safe — the rest of the app only depends on this interface.
 */

const projectsFile = path.join(process.cwd(), "data", "projects.json");
const requestsFile = path.join(process.cwd(), "data", "requests.json");

async function readJson<T>(file: string): Promise<T> {
  const raw = await fs.readFile(file, "utf-8");
  return JSON.parse(raw) as T;
}

async function writeJson(file: string, data: unknown): Promise<void> {
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf-8");
}

const byNewest = (a: { createdAt: string }, b: { createdAt: string }) =>
  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

export async function getProjects(): Promise<Project[]> {
  const projects = await readJson<Project[]>(projectsFile);
  return [...projects].sort(byNewest);
}

export async function getFeaturedProjects(limit = 4): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured).slice(0, limit);
}

export async function getProject(id: string): Promise<Project | null> {
  const projects = await readJson<Project[]>(projectsFile);
  return projects.find((p) => p.id === id) ?? null;
}

export async function saveProjects(projects: Project[]): Promise<void> {
  await writeJson(projectsFile, projects);
}

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  status: string;
  createdAt: string;
}

export async function getRequests(): Promise<ContactRequest[]> {
  // requests.json is gitignored (holds real customer inquiries) — treat a
  // missing file (fresh clone/deploy) as "no submissions yet" rather than erroring.
  let requests: ContactRequest[];
  try {
    requests = await readJson<ContactRequest[]>(requestsFile);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      requests = [];
    } else {
      throw err;
    }
  }
  return [...requests].sort(byNewest);
}

export async function saveRequests(requests: ContactRequest[]): Promise<void> {
  await writeJson(requestsFile, requests);
}
