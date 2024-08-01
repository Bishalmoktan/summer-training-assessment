import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { navDropDown } from "@/data/navData"
import Image from "next/image"
import Link from "next/link"
import newTag from "../../../public/newBadge.png";

const NavAccordianItem = () => {
  return (
    <Accordion type="single" collapsible className="-mb-[15px]">
  <AccordionItem value="item-1" className="border-none">
    <AccordionTrigger className="font-extralight hover:no-underline">Explore courses</AccordionTrigger>
    <AccordionContent>
    {navDropDown.map((item) => (
            <>
            <div key={item.id} className="py-2">
            <Link href={item.link}>
            <div className="flex gap-2">
            <h2 className="font-bold text-primary">{item.title}</h2>
         { item.isNew &&  <Image src={newTag} alt="new tag" className="w-8 object-contain" />}
            </div>
            <p className="text-zinc-500 text-sm">
                {item.description}
            </p>
            </Link>
          </div>
            </>
        ))}
    </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}
export default NavAccordianItem