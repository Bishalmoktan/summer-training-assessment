import Image, { StaticImageData } from "next/image";

interface CoursesCardProps {
  id: number;
  name: string;
  info: string;
  tag: string;
  img: StaticImageData;
  bgImg: StaticImageData;
  color: string;
}

const CoursesCard = ({
  name,
  info,
  tag,
  img,
  bgImg,
  color,
}: CoursesCardProps) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <div
        style={{
          backgroundColor: color,
        }}
        className="relative"
      >
        <div className="flex flex-col justify-between p-4 h-[200px]">
          <Image src={img} alt={name} />
          <h2 className="text-accent font-semibold text-xl">{name}</h2>
        </div>

        <div className="absolute right-0 bottom-0">
          <Image src={bgImg} alt={name} />
        </div>
        <p className="absolute top-0 right-0 bg-[#0B0E38] text-accent p-2 text-sm">
          {tag}
        </p>
      </div>
      <div className="p-4 space-y-4">
        <p className="font-light">{info} </p>
        <p className="font-semibold text-primary">Know More</p>
      </div>
    </div>
  );
};
export default CoursesCard;
