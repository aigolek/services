import { NextResponse } from "next/server";

const TO_EMAIL = "globalconsultmanavgat@gmail.com";
const FROM_EMAIL = "Global Consulting <onboarding@resend.dev>";
const MAX_FILE_BYTES = 4 * 1024 * 1024; // stay under Vercel's ~4.5 MB request body limit

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server is not configured" }, { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const phone = formData.get("phone")?.toString().trim() ?? "";
  const language = formData.get("language")?.toString().trim() ?? "";
  const notary = formData.get("notary") ? "Да" : "Нет";
  const apostille = formData.get("apostille") ? "Да" : "Нет";
  const subject = formData.get("_subject")?.toString() || "Заявка с калькулятора перевода";
  const file = formData.get("file");

  if (!phone || !language) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const attachments: { filename: string; content: string }[] = [];
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: "File is too large" }, { status: 413 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, content: buffer.toString("base64") });
  }

  const html = `
    <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Язык перевода:</strong> ${escapeHtml(language)}</p>
    <p><strong>Нотариальное заверение:</strong> ${notary}</p>
    <p><strong>Апостиль:</strong> ${apostille}</p>
  `.trim();

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      attachments: attachments.length ? attachments : undefined,
    }),
  });

  if (!resendRes.ok) {
    const text = await resendRes.text();
    console.error("Resend error:", resendRes.status, text);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
