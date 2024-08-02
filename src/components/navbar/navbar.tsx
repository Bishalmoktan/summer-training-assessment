import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import NavDropDownItem from "./dropdown";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container py-4 flex justify-between items-center">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Link href={"/"} className="w-[220px]">
          <Image src={logo} alt="logo" className="w-full h-full object-cover" />
        </Link>
        <div className="hidden md:flex gap-6 text-secondary-foreground font-extralight transition-all">
          <NavDropDownItem />

          <Link href={"/"} className="hover:font-normal">
            Success Stories
          </Link>
          <Link href={"/"} className="hover:font-normal">
            Blogs
          </Link>
          <Link href={"/"} className="hover:font-normal">
            Events
          </Link>
        </div>
        <div className="hidden md:block space-x-4">
          <Button variant={"secondary"} size={"lg"}>
            Log in
          </Button>
          <Button size={"lg"}>Start Free Trial</Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
