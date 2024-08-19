"use client";
import { data } from "@/data/learningOutcome";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const AnimateSection = () => {
  // eslint-disable-next-line
  const refs = data.map(() => useRef<HTMLDivElement>(null));

  return (
    <div className="py-10">
      {data.map((item, index) => {
        const { id, Icon, title, description } = item;
        const ref = refs[index];

        // eslint-disable-next-line
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start center", "end center"],
        });

        // eslint-disable-next-line
        const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

        // eslint-disable-next-line
        const fillColor = useTransform(
          scrollYProgress,
          [0, 0.1],
          ["#D0D5DD", "#3940A0"]
        );

        // eslint-disable-next-line
        const textColor = useTransform(
          scrollYProgress,
          [0, 0.1],
          ["#191D23", "#3940A0"]
        );
        
        // eslint-disable-next-line
        const iconColor = useTransform(
          scrollYProgress,
          [0, 0.1],
          ["#191D23", "#FFFFFF"]
        );

        // eslint-disable-next-line
        const circleSize = useTransform(scrollYProgress, [0, 1], [20, 20]);

        return (
          <div
            ref={ref}
            key={id}
            className="w-max p-4 md:p-0 md:pb-20 mx-auto flex md:gap-20 relative bg-[#F8FAFC] rounded-md  mb-4 md:mb-0 md:bg-none"
          >
            <motion.div
              style={{
                backgroundColor: fillColor,
                width: circleSize,
                height: circleSize,
                borderRadius: "50%",
                
              }}
              className="md:block hidden"
            />
            <div
              className={cn(
                "hidden md:block",
                `absolute left-[8px] top-1 h-full bg-[#D0D5DD]`,
                id !== data.length && "w-[3px]"
              )}
            ></div>

            <motion.div
              style={{
                scaleY,
              }}
              className={cn(
                "hidden md:block origin-top",
                `absolute left-[8px] top-1 h-full bg-[#3940A0]`,
                id !== data.length && "w-[3px]"
              )}
            ></motion.div>
            <div className="flex flex-col w-[300px] md:flex-row gap-6 md:w-[500px]">
              <div className="w-max h-max p-3 bg-primary md:hidden rounded-full">
                <Icon
                  width="30"
                  height="30"
                  className="text-white md:text-[#0F172A]"
                />
              </div>
              <motion.div
              style={{
                backgroundColor: fillColor,
                color: iconColor
              }}
              className="w-max h-max p-3  hidden md:block rounded-full">
                <Icon
                  width="30"
                  height="30"
                />
              </motion.div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold tracking-wider text-primary md:hidden">
                  {title}
                </h2>
                <motion.h2 
                style={{
                  color: textColor
                }}
                className="text-lg font-bold tracking-wider text-primary hidden md:block">
                  {title}
                </motion.h2>
                <p className="font-extralight">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimateSection;
