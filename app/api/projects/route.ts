import { NextResponse } from "next/server";
import { getProjects, getProject, saveProjects } from "@/lib/db";
import type { Project } from "@/lib/projectMeta";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
      const project = await getProject(id);
      if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json(project);
    }
    return NextResponse.json(await getProjects());
  } catch {
    return NextResponse.json({ error: "Failed to read projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const projects = await getProjects();
    const newProject: Project = {
      id: `proj_${Date.now()}`,
      title_en: body.title_en || "",
      title_ar: body.title_ar || "",
      summary_en: body.summary_en || "",
      summary_ar: body.summary_ar || "",
      description_en: body.description_en || "",
      description_ar: body.description_ar || "",
      type: body.type || "POS System",
      tags: body.tags || [],
      featured: body.featured || false,
      mainImage: body.mainImage || "",
      images: body.images || [],
      createdAt: new Date().toISOString(),
    };
    await saveProjects([newProject, ...projects]);
    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
