import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  img: StaticImageData;
  company: StaticImageData;
  color: string;
}

const BlogCard = ({
  title,
  description,
  img,
  company,
  duration,
  date,
  color,
}: BlogCardProps) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <div
        style={{
          backgroundColor: color,
        }}
      >
        <div className="flex gap-2 p-4">
          <div>
            <Quote
              fill="#fff"
              opacity={0.9}
              strokeWidth={0}
              className="rotate-180"
            />
            <p className={cn(color !== "#97D6E4" && "text-accent")}>
              {description}
            </p>
          </div>
          <div className="space-y-3">
            <Image
              src={img}
              alt={title}
              className="w-72 object-cover rounded-full"
            />
            <Image src={company} alt={title} className="w-72 object-contain" />
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="font-light text-xs flex gap-2">
          <p>{date}</p>
          <p>{duration}</p>
        </div>
        <h2 className="text-xl font-semibold tracking-wider">{title}</h2>
      </div>
    </div>
  );
};
export default BlogCard;
