import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { data } from "@/data/faqSection"
import { AccordionContent } from "@radix-ui/react-accordion"



const AccordianItem = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[50%] mx-auto my-6">
        {data.map(item => (
            <AccordionItem key={item.id} value={item.answer} className="border-none">
      <AccordionTrigger className="hover:no-underline text-left">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="font-light">
       {item.answer}
      </AccordionContent>
      <Separator className="my-4" />
    </AccordionItem>
    ))}
    </Accordion>
  )
}
export default AccordianItem