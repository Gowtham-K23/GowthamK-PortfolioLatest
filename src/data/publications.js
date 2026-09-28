import finalPaper from "../assets/Publications/final_paper.pdf";
import finalPdf from "../assets/Publications/final.pdf";
import miniImage from "../assets/Publications/mini.png";
import miniPaper from "../assets/Publications/mini_paper.pdf";

const publications = [
  {
    title:
      "AI-Driven Breed Classification and Smart Trading Platform for Cattle and Buffaloes",

    venue:
      "9th IEEE International Conference on Trends in Electronics and Informatics (ICOEI-2026), SCAD College of Engineering and Technology",

    points: [
      "Developed LivestockIQ, an AI-based platform integrating cattle and buffalo breed classification, disease prediction, and digital trading support.",

      "Built a CNN-based classification model achieving 92.4% accuracy and published the research paper in IEEE Xplore.",
    ],

    links: [
      {
        label: "Conference Paper",
        href: finalPaper,
      },
      {
        label: "Certificate",
        href: finalPdf,
      },
    ],
  },

  {
    title: "Automated Recipe Generator Based on Leftovers",

    venue:
      "International Conference on Recent Trends in Green Energy (ICRTGE-2025)",

    points: [
      "Presented Cookify, a web-based recipe recommendation application designed to reduce household food waste through ingredient-based suggestions.",

      "Developed the frontend application using React.js and Tailwind CSS with filtering and recipe visualization features.",
    ],

    links: [
      {
        label: "Conference Paper",
        href: miniPaper,
      },
      {
        label: "Certificate",
        href: miniImage,
      },
    ],
  },
];

export default publications;