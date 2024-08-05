import Image, { StaticImageData } from "next/image";

interface cardProps {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
}

const Card = ({ title, description, img }: cardProps) => {
  return (
    <div className="bg-[#E1E7F8] px-6 py-8 space-y-6 rounded-3xl md:w-[600px]">
      <article className="space-y-2 w-[70%]">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-light text-sm">{description}</p>
      </article>
      <div className="flex justify-end">
        <Image src={img} alt={title} />
      </div>
    </div>
  );
};
export default Card;
