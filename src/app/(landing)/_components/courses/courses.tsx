import { data } from "@/data/courses"
import CoursesCard from "./coursesCard"

const Courses = () => {
  return (
    <section className="container py-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-wider text-center">Explore Other Courses</h2>
      <div className="flex flex-col md:flex-row justify-evenly gap-4 my-8">
        {data.map((item) => (
          <div key={item.id}>
            <CoursesCard {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Courses