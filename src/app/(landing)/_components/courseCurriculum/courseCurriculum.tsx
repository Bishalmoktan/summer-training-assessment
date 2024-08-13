import CourseContent from "./courseContent"

const CourseCurriculum = () => {
  return (
    <section className="bg-[#E1E7F8] py-8">
        <div className="container  space-y-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wider text-center">Course Curriculum</h2>
            </div>
            <CourseContent />
        </div>
    </section>
  )
}
export default CourseCurriculum