import { data } from "@/data/whyChooseUs";
import Card from "./card";

const WhyChooseUs = () => {
  return (
    <section className="container space-y-8">
      <article className="text-center">
        <h1 className="text-3xl font-bold">Why Choose Our Course?</h1>
        <p className="font-extralight">
          Discover the key benefits of mastering Backend Engineering with the
          JAVA Spring Framework.
        </p>
      </article>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((item, index) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
