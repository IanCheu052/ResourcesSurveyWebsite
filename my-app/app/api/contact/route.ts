import "server-only";
import { NextResponse } from "next/server";
import { sendEmail } from "@/backend/mailer";

export async function POST(req: Request) {
   try {
    const body = await req.json();

    await sendEmail(body.subject, body.html);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}