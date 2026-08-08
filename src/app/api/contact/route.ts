import { NextResponse } from "next/server";
import {
  enrollmentSchema,
  contactSchema,
  demoBookingSchema,
  courseEnquirySchema,
} from "@/lib/validations";

const schemas = {
  enrollment: enrollmentSchema,
  contact: contactSchema,
  demo: demoBookingSchema,
  enquiry: courseEnquirySchema,
} as const;

type FormType = keyof typeof schemas;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = (body?.type ?? "contact") as FormType;
    const schema = schemas[type] ?? schemas.contact;

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    console.info(
      `[${type.toUpperCase()}] ${JSON.stringify({ ...parsed.data, type })}\n`,
    );

    return NextResponse.json(
      { ok: true, message: "Submission received" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    );
  }
}