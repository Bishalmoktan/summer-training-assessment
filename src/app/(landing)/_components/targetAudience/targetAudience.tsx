import { data } from "@/data/targetAudience";
import Card from "./card";
import { Button } from "@/components/ui/button";

const TargetAudience = () => {
  return (
    <section className="container space-y-8 py-16">
      <article className="text-center">
        <h1 className="text-4xl font-bold">Who is this Course for?</h1>
      </article>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-items-center">
        {data.map((item, index) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <div className="text-center">
        <Button size={"lg"} className="px-28">
          Start 7-Days Free Trial
        </Button>
      </div>
    </section>
  );
};
export default TargetAudience;
