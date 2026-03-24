import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: Wire up to email service / database
  console.log("Contact form submission:", body);

  return NextResponse.json({ success: true, message: "Message received" });
}
