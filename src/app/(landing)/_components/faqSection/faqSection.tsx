import { Accordion } from "@/components/ui/accordion";
import AccordianItem from "./accordianItem";
import { data } from "@/data/faqSection";
import { Separator } from "@/components/ui/separator";

const FAQSection = () => {
  return (
    <section className="container">
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wider">
        Frequently Asked Questions
      </h2>

      <AccordianItem />
    </section>
  );
};
export default FAQSection;
