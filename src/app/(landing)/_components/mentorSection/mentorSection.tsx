import Image from "next/image"
import mentorImg from "../../../../../public/mentor.png"
import amazonLogo from "../../../../../public/amazon.svg"
import linkedin from "../../../../../public/linkedin.svg"

const MentorSection = () => {
  return (
    <section className="container w-full md:w-[70%] my-28 hidden md:block">
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wider">Learn with Industry Experienced Mentor</h2>
      <div className="flex gap-8 my-8">
        <div className="bg-[#E1E7F8] size-48  rounded-full pt-4 overflow-hidden flex-shrink-0">
          <Image src={mentorImg} alt="Mentor" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-light">Vivek has taught 10,000+ students through on campus workshops and online courses on Interview Preparation. He has worked at Amazon with its High Scale Systems for three years after graduating from IIT. He is loved by his students for his lucid in-depth explanations and ability to make people think through problems.</p>
          <div>
            <div className="font-semibold">Vivekan and Vivek</div>
            <div className="font-semibold flex gap-2">
              <p>IIT BHU Alumni, Ex-SDE</p>
               <Image src={amazonLogo} alt="Amazon" className="w-16 mt-1" /> </div>
          </div>
          <Image src={linkedin} alt="Linkedin" className="" />
        </div>
      </div>
    </section>
  )
}
export default MentorSection