import { jsPDF } from "jspdf";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, result } = body;

  console.log("Email:", email);
  console.log("Result:", result);

  if (!email || !result) {
    return NextResponse.json(
      { error: "Email ou données manquantes" },
      { status: 400 }
    );
  }

  // 1. Générer le PDF
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Rapport PropertAI", 20, 20);
  doc.text(`Rentabilité estimée: ${result.rentabilite}`, 20, 30);
  // ➕ Tu peux ajouter les autres données ici comme dans ton export PDF

  const pdfBlob = doc.output("blob");
  const buffer = await pdfBlob.arrayBuffer();

  // 2. Convertir en base64
  const base64PDF = Buffer.from(buffer).toString("base64");

  // 3. Envoyer l’e-mail
  try {
    await resend.emails.send({
      from: "PropertAI <no-reply@propertai.fr>",
      to: email,
      subject: "Votre rapport d'analyse PropertAI",
      html: `<p>Bonjour,<br/>Voici votre rapport PropertAI en pièce jointe.<br/><br/>Merci pour votre confiance !</p>`,
      attachments: [
        {
          filename: "rapport_propertai.pdf",
          content: base64PDF,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Échec de l'envoi d'email" },
      { status: 500 }
    );
  }
}
