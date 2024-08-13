import MobileViewTab from "./mobileViewTab"
import TabSection from "./tabSection"

const CourseContent = () => {
  return (
    <div className="bg-[#A4BAEC] rounded-2xl p-8">
      <div className="hidden md:block">
      <TabSection />
      </div>
      <div className="md:hidden">
      <MobileViewTab />
      </div>
    </div>
  )
}
export default CourseContent