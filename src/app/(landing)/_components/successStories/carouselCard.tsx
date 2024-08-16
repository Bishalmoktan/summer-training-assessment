import Image, { StaticImageData } from "next/image";
import linkedin from "../../../../../public/linkedin.svg"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface CarouselCardProps {
    id: number;
    companyImg: StaticImageData;
    name: string;
    feedback: string;
    avatar: StaticImageData
  }

const CarouselCard = ({
    companyImg,
    name,
    feedback,
    avatar
} : CarouselCardProps) => {
  return (
    <Card className="w-full md:w-[380px] bg-secondary">
      <CardHeader className="flex justify-center items-center">
        <QuoteIcon fill="#6F6B6B" strokeWidth={0} className="rotate-180" />
        <p className="font-extralight">{feedback}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <div>
        <Image
        src={avatar}
        alt="Avatar"
        className="size-32 object-cover rounded-full"
        />
        </div>
        <div className="flex gap-2 justify-center font-bold">
        Ayush Srivasthva
        <Image
        src={linkedin}
        alt="Linked in"
        
        />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center">
        <span className="font-bold">SDE</span>
        <Image src={companyImg} alt="company" className="w-24" />
      </CardFooter>
    </Card>
  )
}
export default CarouselCard