"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/data/herosection";
import CarouselCard from "./carouselCard";
import Autoplay from "embla-carousel-autoplay";

const CarouseSection = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full md:w-[400px] mx-auto pb-10 md:pb-0"
    >
      <CarouselContent className="mx-auto">
        {carouselData.map((item) => (
          <CarouselItem key={item.id}>
            <CarouselCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouseSection;
