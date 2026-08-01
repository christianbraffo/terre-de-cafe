import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "bchrist.junior@gmail.com";
const FROM_EMAIL =
  process.env.EMAIL_FROM ?? "TERREDECAFE <contact@terredecafe.ci>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (
      !name?.trim() ||
      !email?.trim() ||
      !company?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const smtpUser = process.env.ZOHO_SMTP_USER;
    const smtpPass = process.env.ZOHO_SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("ZOHO_SMTP_USER ou ZOHO_SMTP_PASS manquant");
      return NextResponse.json(
        { error: "Service email non configuré." },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = escapeHtml(company.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.com",
      port: Number(process.env.ZOHO_SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email.trim(),
      subject: `Nouvelle demande de devis — ${company.trim()}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #6b3e26; border-bottom: 2px solid #c4a484; padding-bottom: 12px;">
            Nouvelle demande de devis
          </h2>
          <p style="margin: 24px 0 8px;"><strong>Nom :</strong> ${safeName}</p>
          <p style="margin: 8px 0;"><strong>Email :</strong> ${safeEmail}</p>
          <p style="margin: 8px 0;"><strong>Entreprise :</strong> ${safeCompany}</p>
          <p style="margin: 24px 0 8px;"><strong>Besoins :</strong></p>
          <p style="background: #f7f3ef; padding: 16px; border-radius: 8px; line-height: 1.6;">
            ${safeMessage}
          </p>
          <p style="margin-top: 32px; font-size: 13px; color: #888;">
            Message envoyé depuis le formulaire TERREDECAFE
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur API devis:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}
