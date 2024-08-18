import { Button } from "@/components/ui/button";
import CarouseSection from "./carouselSection";

const SuccessStories = () => {
  return (
    <section className="container space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Success Stories
      </h2>
      <div className="flex-grow-0">
        <CarouseSection />
      </div>
      <div className="flex justify-center">
        <Button className="">Read More Stories</Button>
      </div>
    </section>
  );
};
export default SuccessStories;
