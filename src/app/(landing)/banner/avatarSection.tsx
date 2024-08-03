import { avatars } from "@/data/banner";
import { Star } from "lucide-react";
import Image from "next/image";

const AvatarSection = () => {
  return (
    <div className="space-y-2">
      <div className="flex gap-0 items-center">
        {Array.from({ length: 5 }).map((item, index) => (
          <Star fill="#F59E0B" strokeWidth={0} key={index} className="size-8" />
        ))}
        <div className="text-xl">4.9/5</div>
      </div>
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div key={index}>
            <Image
              src={avatar}
              alt={`avatar-${index}`}
              className="size-10 md:size-12 rounded-full border-2 border-white"
            />
          </div>
        ))}
        <div className="bg-secondary rounded-full flex justify-center items-center px-2 text-black text-sm md:text-base">
          5000+
        </div>
      </div>
    </div>
  );
};
export default AvatarSection;
