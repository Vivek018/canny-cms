import { EmailForm } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { message, subject, name } = (await req.json()) as unknown as EmailForm;
  try {
    const data = await resend.emails.send({
      from: "vivek@cannynext.in",
      to: "info@cannymanagement.com",
      subject: subject,
      html: `<h2>${name}</h2><br/><br/<p>${message}</p>`,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
