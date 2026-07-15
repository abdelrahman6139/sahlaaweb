import { NextResponse } from "next/server";
import { getProjects, saveProjects } from "@/lib/db";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const projects = await getProjects();
    const index = projects.findIndex((p) => p.id === params.id);
    if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

    projects[index] = { ...projects[index], ...body, id: params.id };
    await saveProjects(projects);
    return NextResponse.json(projects[index]);
  } catch {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const projects = await getProjects();
    await saveProjects(projects.filter((p) => p.id !== params.id));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
