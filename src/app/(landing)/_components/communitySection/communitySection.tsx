import Image from "next/image";
import community from "../../../../../public/community.svg";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="container py-4 my-8 rounded-3xl bg-primary text-white grid grid-cols-1 md:grid-cols-3 items-center">
      <div className="md:col-span-1">
        <Image src={community} alt="Community" />
      </div>
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Join our Community, and Code Everyday.
        </h2>
        <p>
          Consistency is what makes your perfect. Solve Problems everyday with
          us by joining the Community.
        </p>
        <Button variant={"outline"} className="w-full md:w-fit">
          Apply Now
        </Button>
      </div>
    </section>
  );
};
export default CommunitySection;
