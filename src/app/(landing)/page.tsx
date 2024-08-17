import Companies from "./_components/companies";
import HeroSection from "./_components/herosection/herosection";
import LearningOutcome from "./_components/learningOutcome/learningOutcome";
import TargetAudience from "./_components/targetAudience/targetAudience";
import WhyChooseUs from "./_components/whyChooseUs/whyChooseUs";
import ImpactBanner from "./_components/banner/impactBanner";
import CourseCurriculum from "./_components/courseCurriculum/courseCurriculum";
import ProjectSection from "./_components/projectsSection/projectsSection";
import MentorSection from "./_components/mentorSection/mentorSection";
import MentorSectionMobile from "./_components/mentorSection/mentorSectionMobile";
import SuccessStories from "./_components/successStories/successStories";
import Pricing from "./_components/pricing/pricing";
import CommunitySection from "./_components/communitySection/communitySection";

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
      <ProjectSection />
      <MentorSection />
      <MentorSectionMobile />
      <SuccessStories />
      <Pricing />
      <CommunitySection />
    </>
  );
}
