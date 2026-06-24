import { NextResponse } from "next/server";
import { Resend } from "resend";

// Validation simple côté serveur (pas de dépendance externe).
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nom, email et message sont obligatoires." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message trop long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@garros.ai";
  const from = process.env.CONTACT_FROM_EMAIL ?? "contact@garros.ai";

  if (!apiKey) {
    // En local sans clé : on ne casse pas le build, on signale clairement.
    console.error("RESEND_API_KEY manquante — email non envoyé.");
    return NextResponse.json(
      { error: "Service d'envoi non configuré." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `garros.ai <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Nouveau message — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        company ? `Entreprise : ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json({ error: "L'envoi a échoué." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Exception lors de l'envoi :", err);
    return NextResponse.json({ error: "L'envoi a échoué." }, { status: 502 });
  }
}
