"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { data } from "@/data/successStories";
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
      className="w-full pb-10 md:pb-0"
    >
      <CarouselContent className="mx-auto">
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <CarouselCard {...item}  />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouseSection;
