import MobileViewTab from "./mobileViewTab"
import TabSection from "./tabSection"

const CourseContent = () => {
  return (
    <div className="bg-[#A4BAEC] rounded-2xl p-8">
      <div className="hidden md:block">
      <TabSection />
      <p><span className="text-primary font-bold">Pre-requisites required:</span> You must be able to write code in at least one programming language.</p>

      </div>
      <div className="md:hidden space-y-4">
      <MobileViewTab />
      <p><span className="text-primary font-bold">Pre-requisites required:</span> You must be able to write code in at least one programming language.</p>

      </div>
    </div>
  )
}
export default CourseContent