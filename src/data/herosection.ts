import chart from "../../public/chart.svg";
import laptop from "../../public/laptop.svg";
import code from "../../public/code.svg";
import document from "../../public/document.svg";
import time from "../../public/time.svg";

import swiggy from "../../public/swiggy.png";
import quora from "../../public/quora.png";
import payment from "../../public/payment.png";

export const heroSectionData = [
  {
    id: 1,
    info: "100+ hours of live interactive classes",
    icon: chart,
  },
  {
    id: 2,
    info: "Learn by doing 3 Industry-level projects.",
    icon: laptop,
  },
  {
    id: 3,
    info: "Crack backend coding interview roles for JAVA Developer",
    icon: code,
  },
  {
    id: 4,
    info: "Industry-level projects for your Resume",
    icon: document,
  },
  {
    id: 5,
    info: "Estimated Duration: 3 months",
    icon: time,
  },
];

export const carouselData = [
  {
    id: 1,
    img: swiggy,
    courseName: "Swiggy Backend: End to End Project",
    info: "This project will demonstrate your skills in web development, database integration, and security.",
    tech: ["Springdata JPA", "MySQL or PostgreSQL", "Spring Security"],
  },
  {
    id: 2,
    img: quora,
    courseName: "Building Quora using Micro-Service in Springboot",
    info: "We will develop a microservice for user authentication and management. Users can register, log in, and manage their profiles through this service.",
    tech: ["Microservice", "Docker", "Kubernetes"],
  },
  {
    id: 3,
    img: payment,
    courseName: "Bring a Payment Service using Transaction and Springboot",
    info: "This project will demonstrate your skills in web development, microservices architecture, and cloud computing.",
    tech: ["Web Development", "Cloud Computing", "Microservice Architecture"],
  },
];
