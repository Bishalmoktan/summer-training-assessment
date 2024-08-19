import facebook from "../../../public/socials/facebook.svg";
import youtube from "../../../public/socials/youtube.svg";
import linkedin from "../../../public/socials/linkedin.svg";
import telegram from "../../../public/socials/telegram.svg";
import instagram from "../../../public/socials/instagram.svg";
import Image from "next/image";
import MobileFooter from "./mobileFooter";

const Footer = () => {
  const socialIcons = [facebook, youtube, linkedin, telegram, instagram];
  return (
    <>
      <footer className="bg-primary text-accent py-8 hidden md:block">
        <div className="container">
          <div className="flex justify-evenly">
            <div>
              <h3 className="font-semibold text-lg">COMPANY</h3>
              <div className="space-y-4 font-light mt-4">
                <p>About Us</p>
                <p>Success Stories</p>
                <p>Blogs</p>
                <p>Events</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">COURSES</h3>
              <div className="flex gap-16">
                <div className="space-y-4 font-light mt-4">
                  <p>Renaissance for Top Tech Companies</p>
                  <p>Low Level Design and Concurrency</p>
                  <p>Crash Course in Data Structures & Algorithms</p>
                  <p>Backend Development with Java Spring Boot</p>
                  <p>Begin with Programming in C++</p>
                </div>

                <div className="space-y-4 font-light mt-4">
                  <p>Become a Python Expert</p>
                  <p>System Design for professionals</p>
                  <p>Be a Data Engineer</p>
                  <p>Full Stack Development in MERN</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg">SERVICES</h3>
              <div className="space-y-4 font-light my-4">
                <p>Get Scholarship</p>
                <p>Teach with us</p>
                <p>Join Our Community</p>
              </div>

              <h3 className="font-semibold text-lg">PRIVACY POLICY</h3>
              <div className="space-y-4 font-light mt-4">
                <p>Terms & Conditions</p>
                <p>Refund Policy</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>All Right Reserved with @Programming Pathshala</p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="size-10 rounded-full bg-accent flex justify-center items-center"
                >
                  <Image src={icon} alt="Icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <MobileFooter />
    </>
  );
};
export default Footer;
