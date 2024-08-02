import { Button } from "@/components/ui/button";
import { heroSectionData } from "@/data/herosection";
import Image from "next/image";
import CarouseSection from "./carousel";

const HeroSection = () => {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-secondary px-4 py-2 rounded-md w-max text-sm md:text-base font-semibold">
            Recommended for Working Professionals
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl text-primary font-semibold tracking-wide">
              Learn Backend Engineering in JAVA Spring Framework
            </h1>
            <p className="font-extralight">
              Be a top JAVA Backend Developer. Master developing stable &
              scalable backends using Spring Boot, Hibernate and JPA. Crack
              Backend Development Role
            </p>
          </div>

          <div className="md:hidden">
            <CarouseSection />
          </div>

          <div className="space-y-4">
            {heroSectionData.map((item) => (
              <div key={item.id} className="flex gap-2">
                <Image src={item.icon} alt="icon" className="size-5" />
                <p className="font-extralight">{item.info}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Button size={"lg"} className="px-28">
              Start 7-Days Free Trial
            </Button>
            <p className="font-extralight">
              Watch 10+ lectures and solve problems for <strong>free</strong>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <CarouseSection />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
