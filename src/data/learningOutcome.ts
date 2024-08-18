import {
  BookTextIcon,
  Clock5Icon,
  CodeXmlIcon,
  PencilLineIcon,
} from "lucide-react";

export const data = [
  {
    id: 1,
    title: "OOP Foundations",
    description:
      "Begin your journey by mastering fundamental OOP concepts in Java, from classes and objects to inheritance. Advance to handling errors effectively and constructing scalable systems using abstract classes and interfaces, ensuring smooth application operation.",
    Icon: BookTextIcon,
  },
  {
    id: 2,
    title: "Spring Core Mastery",
    description:
      "Next, learn IoC, dependency injection, and Spring Beans to create flexible and maintainable applications. Develop proficiency in building RESTful APIs with Spring MVC, empowering you to build efficient and dynamic web applications.",
    Icon: PencilLineIcon,
  },
  {
    id: 3,
    title: "Concurrency Expertise",
    description:
      "Explore the nuances of concurrency versus parallelism and implement thread safety techniques using locks and executors. Learn best practices to  avoid common pitfalls and to optimize application performance and prevent data corruption, ensuring your code runs efficiently.",
    Icon: Clock5Icon,
  },
  {
    id: 4,
    title: "Advanced Thread Synchronization",
    description:
      "Lastly, master synchronization techniques such as volatile variables and wait-notify mechanisms for consistent data management and to avoid CPU wastage. Apply these skills through practical implementations in real-world scenarios, solidifying your ability to tackle complex concurrency challenges, like solving the FizzBuzz problem.",
    Icon: CodeXmlIcon,
  },
];
