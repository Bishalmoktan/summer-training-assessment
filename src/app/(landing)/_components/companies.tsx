"use client";

import { companies } from "@/data/companies";
import Image from "next/image";
import { motion } from "framer-motion";

const Companies = () => {
  const marqueeVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      },
    },
  };
  return (
    <div className="container py-4 text-center overflow-x-hidden">
      <h2 className="font-bold">Our Students are placed at:</h2>
      <div className="flex marqueGradient">
        <motion.div
          className="flex flex-shrink-0"
          variants={marqueeVariants}
          initial="initial"
          animate="animate"
        >
          {companies.map((company) => (
            <div key={company.id}>
              <Image
                className="h-40 w-48 pr-20"
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-shrink-0"
          variants={marqueeVariants}
          initial="initial"
          animate="animate"
        >
          {companies.map((company) => (
            <div key={`${company.id}-duplicate`}>
              <Image
                className="h-40 w-48 pr-20"
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Companies;
