import { data } from "@/data/pricingPlans";
import PricingCard from "./pricingCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="container my-16">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Pricing Plans for You
        </h2>
        <p className="font-light">Invest in your skills for the future</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-evenly items-end my-8">
        {data.map((item) => (
          <PricingCard key={item.id} {...item} />
        ))}
      </div>
      <div>
        <div className="flex items-center gap-2 flex-col">
          <div className="relative w-[350px]">
            <Input className="w-full pr-[80px] py-2" placeholder="Enter code" />
            <Button className="absolute top-1 right-1 h-[80%]">Apply</Button>
          </div>
          <p className="text-[#4F516B] font-semibold text-center">
            🎁 I have a Referral Code/Coupon Code!
          </p>
          <p className="text-[#9A4D06] font-semibold text-center">
            To be paid as a one-time payment. Easy EMI options available with
            HDFC Cards and Zest Money.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
