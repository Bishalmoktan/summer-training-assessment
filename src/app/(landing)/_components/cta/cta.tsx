import { Button } from "@/components/ui/button";
import whatsApp from "../../../../../public/socials/whatsApp.svg"
import Image from "next/image";

const CTA = () => {
  return (
    <section className="container space-y-8">
        <div className="hidden  md:block text-3xl font-semibold text-center tracking-wider">
      <h2>Still confused? Take a free trial of our course </h2>
      <h2>and see the difference yourself</h2>
        </div>
        <h2 className="md:hidden text-2xl font-semibold text-center tracking-wider">Still confused? Take a free trial of our course and see the difference yourself</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center">
            <Button variant={'secondary'} className="bg-[#E7EAEE] flex gap-2">
                <p>Talk to us</p>
                <Image src={whatsApp} alt="Whats App" />
            </Button>
            <Button>Start 7-Days  Free Trial</Button>
        </div>
    </section>
  );
};
export default CTA;
