import { Separator } from "@/components/ui/separator";
import { impactBanner } from "@/data/banner";
import AvatarSection from "./avatarSection";
import ImpactItem from "./impactItem";

const ImpactBanner: React.FC = () => {
  return (
    <section className="bg-[#0F172A]">
      <div className="container text-white flex flex-col md:flex-row gap-5 justify-around items-center py-8">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wider">
          Our Impact
        </h3>
        <Separator
          className="bg-white h-20 md:block hidden"
          orientation="vertical"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 items-center">
          {impactBanner.map((item, index) => (
            <ImpactItem key={index} title={item.title} info={item.info} />
          ))}
          <AvatarSection />
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
