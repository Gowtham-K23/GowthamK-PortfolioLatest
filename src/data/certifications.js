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
    org: "IBM",
    issued: "Jan 27, 2026",
    file: pythonDs,
  },
  {
    id: "java",
    title: "Java for Beginners",
    org: "GUVI HCL",
    issued: "Jul 10, 2025",
    file: java,
  },
  {
    id: "mongo",
    title: "MongoDB Basics for Students",
    org: "MongoDB",
    issued: "Jul 3, 2025",
    file: mongo,
  },
  {
    id: "aws",
    title: "AWS Academy Cloud Foundations",
    org: "AWS Academy",
    issued: "Jan 24, 2025",
    file: aws,
  },
  {
    id: "sql",
    title: "Database Programming with SQL",
    org: "Oracle Academy",
    issued: "Jun 2, 2024",
    file: sql,
  },
  {
    id: "pcap",
    title: "PCAP: Programming Essentials in Python",
    org: "Cisco Networking Academy",
    issued: "May 11, 2024",
    file: pcap,
  },
  {
    id: "ml",
    title: "Introduction to Machine Learning",
    org: "Infosys Springboard",
    issued: "May 28, 2023",
    file: ml,
  },
];

export default certifications;