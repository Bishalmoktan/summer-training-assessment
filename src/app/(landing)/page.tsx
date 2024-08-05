import Companies from "./_components/companies";
import HeroSection from "./_components/herosection/herosection";
import TargetAudience from "./_components/targetAudience/targetAudience";
import WhyChooseUs from "./_components/whyChooseUs/whyChooseUs";
import ImpactBanner from "./banner/impactBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <ImpactBanner />
      <WhyChooseUs />
      <TargetAudience />
    </>
  );
}
