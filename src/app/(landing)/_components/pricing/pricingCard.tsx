import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
    id: number;
    duration: string;
    originalPrice: string;
    currentPrice: string;
    monthlyPrice: string;
    isRecommended: boolean;
}

const PricingCard = ({
    duration,
    originalPrice,
    currentPrice,
    isRecommended,
    monthlyPrice
} : PricingCardProps) => {
  return (
    <Card className={cn("w-full h-max relative md:w-[300px] bg-[#F7F8F9] flex flex-col items-center justify-center overflow-hidden",
        isRecommended && 'h-[300px]'
    )}>
        <CardHeader>
          <p className="text-primary text-xl font-semibold w-max relative after:absolute after:left-1/2 after:-bottom-2 after:w-[80%] after:h-[2px] after:transform after:-translate-x-1/2 after:bg-primary">  {duration} </p>
          { isRecommended &&  <div className="absolute -top-10 -right-24 bg-[#F1511B] text-white px-20 pb-4 pt-20 rotate-45 text-sm">Recommended</div>}
        </CardHeader>
        <CardContent className="text-center">
            <div className="space-y-2">
            <p className="line-through text-[#64748B]">{originalPrice}</p>
            <p className="text-3xl text-primary font-semibold">{currentPrice}</p>
            </div>
            <div>which costs {monthlyPrice}/month</div>
        </CardContent>
        <CardFooter>
            <Button size={'lg'} style={{
                backgroundColor: isRecommended ? '#F1511B': '#3940A0'
            }} className="w-[250px]">Subscribe Now</Button>
        </CardFooter>
    </Card>
  )
}
export default PricingCard