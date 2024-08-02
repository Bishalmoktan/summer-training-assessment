import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import swiggy from "../../../../public/swiggy.png";
import { Badge } from "@/components/ui/badge";

interface CarouselCardProps {
  id: number;
  img: StaticImageData;
  courseName: string;
  info: string;
  tech: string[];
}

const CarouselCard = ({ img, courseName, info, tech }: CarouselCardProps) => {
  return (
    <Card className="w-full md:w-[380px] bg-secondary">
      <CardHeader className="flex justify-center items-center">
        <Image
          src={img}
          alt="swiggy"
          className="w-full object-cover rounded-md"
        />
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-xl">{courseName}</h1>
        <p className="font-extralight">{info}</p>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {tech.map((item, index) => (
          <Badge
            key={index}
            className="bg-white text-black font-extralight hover:bg-white"
          >
            {item}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
export default CarouselCard;
