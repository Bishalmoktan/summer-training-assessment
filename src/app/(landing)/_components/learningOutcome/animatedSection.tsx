import { data } from "@/data/learningOutcome";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

const AnimateSection = () => {
  return (
    <div className="py-10">
      {data.map((item) => {
        const { id, Icon, title, description } = item;
        return (
          <div key={id} className="w-max p-4 md:p-0 md:pb-20 mx-auto flex md:gap-20 relative bg-[#F8FAFC] rounded-md  mb-4 md:mb-0 md:bg-none">
            <div className={cn(
              'hidden md:block',
              `before:absolute before:left-[8px] before:top-1 before:h-full before:bg-[#D0D5DD]`,
              id != data.length && 'before:w-[3px]'
              
              )}>
            <Circle size={'20'} fill="#D0D5DD" strokeWidth={0} />
            </div>
            <div className="flex flex-col w-[300px] md:flex-row gap-6 md:w-[500px]">
              <div className="w-max h-max p-3 bg-primary md:bg-[#EBECF6] rounded-full">
                <Icon width="30" height="30" className="text-white md:text-[#0F172A]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold tracking-wider text-primary md:text-black">{title}</h2>
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
