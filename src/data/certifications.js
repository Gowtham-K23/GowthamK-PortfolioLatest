import aws from "../assets/Certifications/AWS.pdf";
import sql from "../assets/Certifications/DBMS.pdf";
import pcap from "../assets/Certifications/PCAP.pdf";
import java from "../assets/Certifications/Java.jpg";
import ml from "../assets/Certifications/ML.png";
import pythonDs from "../assets/Certifications/PythonIBM.pdf";
import mongo from "../assets/Certifications/MongoDB.pdf";

// Newest first. `id` picks the icon in Certifications.jsx.
const certifications = [
  {
    id: "pythonDs",
    title: "Python for Data Science",
    subtitle: null,
    issued: "Jan 27, 2026",
    file: pythonDs,
  },
  {
    id: "java",
    title: "Java for Beginners",
    subtitle: null,
    issued: "Jul 10, 2025",
    file: java,
  },
  {
    id: "mongo",
    title: "MongoDB Basics for Students",
    subtitle: null,
    issued: "Jul 3, 2025",
    file: mongo,
  },
  {
    id: "aws",
    title: "AWS Academy Graduate",
    subtitle: "AWS Academy Cloud Foundations",
    issued: "Jan 24, 2025",
    file: aws,
  },
  {
    id: "sql",
    title: "Database Programming with SQL",
    subtitle: null,
    issued: "Jun 2, 2024",
    file: sql,
  },
  {
    id: "pcap",
    title: "PCAP: Programming Essentials in Python",
    subtitle: null,
    issued: "May 11, 2024",
    file: pcap,
  },
  {
    id: "ml",
    title: "Introduction to Machine Learning",
    subtitle: null,
    issued: "May 28, 2023",
    file: ml,
  },
];

export default certifications;