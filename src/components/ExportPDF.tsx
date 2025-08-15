"use client";

import { AnalyseResult } from "@/app/analyse/page";
import { jsPDF } from "jspdf";

export const handleExportPDF = async (result: AnalyseResult) => {
  if (!result) return;

  const doc = new jsPDF();
  const marginLeft = 20;
  const contentWidth = 170;
  let y = 20;
  let currentPage = 1;

  const getBase64FromUrl = async (url: string): Promise<string> => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  const logoBase64 = await getBase64FromUrl("/logo_orange_bleu.png");

  // Couleurs PropertAI
  const orange = [249, 115, 22]; // #f97316
  const blue = [37, 99, 235]; // #2563eb
  const lightGray = [245, 245, 245];
  const borderGray = [220, 220, 220];
  const green = [22, 163, 74];
  const red = [220, 38, 38];

  // Logo et titre
  doc.addImage(logoBase64, "PNG", marginLeft, y, 40, 8);
  y += 7;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(blue[0], blue[1], blue[2]);
  doc.text("Rapport d'analyse", marginLeft + 50, y);
  y += 10;

  // Ligne décorative
  doc.setDrawColor(orange[0], orange[1], orange[2]);
  doc.setLineWidth(1);
  doc.line(marginLeft, y, 190, y);
  y += 10;

  const addFooter = () => {
    doc.setFontSize(9);
    doc.setTextColor(130);
    doc.text(`Page ${currentPage}`, 180, 285, { align: "right" });
    doc.text("Généré avec PropertAI – www.propertai.fr", marginLeft, 285);
  };

  const addSection = (
    title: string,
    content: string | string[],
    options?: { color?: number[]; badge?: string; badgeColor?: number[] }
  ) => {
    if (y > 240) {
      addFooter();
      doc.addPage();
      currentPage++;
      y = 20;
    }

    const padding = 5;
    const text = typeof content === "string" ? content : content.join("\n");
    const lines = doc.splitTextToSize(text, contentWidth - padding * 2);
    const boxHeight = lines.length * 6 + 20;

    // Fond et bordure
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.roundedRect(marginLeft - 2, y, contentWidth, boxHeight, 3, 3, "F");
    doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
    doc.roundedRect(marginLeft - 2, y, contentWidth, boxHeight, 3, 3);

    // Titre
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    const titleColor = options?.color ?? blue;
    doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
    doc.text(title, marginLeft, y + 8);

    // Badge éventuel
    if (options?.badge) {
      const badgeWidth = doc.getTextWidth(options.badge) + 8;
      if (options?.badgeColor) {
        const [r, g, b] = options.badgeColor;
        doc.setFillColor(r, g, b);
      } else {
        doc.setFillColor(255, 255, 255);
      }

      doc.roundedRect(
        marginLeft + doc.getTextWidth(title) + 6,
        y + 2,
        badgeWidth,
        7,
        3,
        3,
        "F"
      );
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text(options.badge, marginLeft + doc.getTextWidth(title) + 25, y + 7);
    }

    // Contenu
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(50);
    doc.text(lines, marginLeft, y + 16);

    y += boxHeight + 6;
  };

  // Sections
  addSection("Rentabilité estimée", result.rentabilite, { color: blue });
  addSection(
    "Loyer estimé",
    `${result.loyer.estimation}\n\n${result.loyer.explication}`,
    { color: orange }
  );
  addSection(
    "Fiscalité conseillée",
    `${result.fiscalite.regime}\n\n${result.fiscalite.explication}`,
    { color: blue }
  );
  addSection("Recommandations", result.recommandations, { color: orange });
  addSection("Points forts", result.forces, { color: green });
  addSection("Points faibles", result.faiblesses, { color: red });
  addSection("Questions à poser", result.questions, { color: blue });
  addSection("Stratégie optimale", result.strategie, { color: orange });
  addSection(
    "Estimation du bien",
    `${result.estimationBien.estimation} (affiché : ${result.estimationBien.prixAffiche})\n${result.estimationBien.commentaire}`,
    {
      color: blue,
      badge:
        result.estimationBien.positionnement === "bonne_affaire"
          ? "Bonne affaire"
          : result.estimationBien.positionnement === "negociable"
            ? "Prix négociable"
            : "Prix surcôté",
      badgeColor:
        result.estimationBien.positionnement === "bonne_affaire"
          ? [34, 197, 94]
          : result.estimationBien.positionnement === "negociable"
            ? [234, 179, 8]
            : [239, 68, 68],
    }
  );
  addSection(
    "Tension locative",
    `${result.tensionLocative.estZoneTendue ? "Zone tendue" : "Zone non tendue"}\n${result.tensionLocative.commentaire}`,
    {
      color: result.tensionLocative.estZoneTendue ? orange : blue,
    }
  );

  addFooter();
  doc.save("rapport_propertai.pdf");
};
