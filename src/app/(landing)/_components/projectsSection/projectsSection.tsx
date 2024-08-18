import { carouselData } from "@/data/herosection";
import CarouselCard from "../herosection/carouselCard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="container my-8 space-y-6">
      <div className="w-full md:w-[50%] mx-auto text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wider">
          Learn by Building: Hands-On Projects for Real-World Mastery
        </h2>
        <p className="font-light mt-2">
          Dive into practical, real-world projects designed to transform your
          theoretical knowledge into tangible skills, preparing you for the
          challenges of backend engineering.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-4">
        {carouselData.map((course) => (
          <div key={course.id}>
            <CarouselCard {...course} />
          </div>
        ))}
      </div>
      <Button className="flex gap-2 mx-auto">
        <Download /> Download Detail Curriculum
      </Button>
    </section>
  );
};
export default ProjectSection;
