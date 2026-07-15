import { NextResponse } from "next/server";
import { getRequests, saveRequests, type ContactRequest } from "@/lib/db";

export async function GET() {
  try {
    return NextResponse.json(await getRequests());
  } catch {
    return NextResponse.json({ error: "Failed to read requests" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requests = await getRequests();
    const newRequest: ContactRequest = {
      id: `req_${Date.now()}`,
      name: body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      company: body.company || "",
      service: body.service || "",
      message: body.message || "",
      status: "new",
      createdAt: new Date().toISOString(),
    };
    await saveRequests([newRequest, ...requests]);
    return NextResponse.json(newRequest, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to save request" }, { status: 500 });
  }
}
