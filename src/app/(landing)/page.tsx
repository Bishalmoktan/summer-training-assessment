import Companies from "./_components/companies";
import HeroSection from "./_components/herosection/herosection";
import LearningOutcome from "./_components/learningOutcome/learningOutcome";
import TargetAudience from "./_components/targetAudience/targetAudience";
import WhyChooseUs from "./_components/whyChooseUs/whyChooseUs";
import ImpactBanner from "./_components/banner/impactBanner";
import CourseCurriculum from "./_components/courseCurriculum/courseCurriculum";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <ImpactBanner />
      <WhyChooseUs />
      <TargetAudience />
      <LearningOutcome />
      <CourseCurriculum />
    </>
  );
}
