import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import NavAccordianItem from "./navAccordian";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[85vw]">
        <SheetHeader>
          <SheetTitle>
            <Link href={"/"} className="">
              <Image
                src={logo}
                alt="logo"
                className="w-[200px] h-full object-cover"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="py-4 flex flex-col gap-6 text-secondary-foreground font-extralight transition-all">
          <NavAccordianItem />
          <Link href={"/"} className="hover:font-normal">
            Success Stories
          </Link>
          <Link href={"/"} className="hover:font-normal">
            Blogs
          </Link>
          <Link href={"/"} className="hover:font-normal">
            Events
          </Link>
          <div className="flex justify-between">
            <Button variant={"secondary"} size={"lg"}>
              Log in
            </Button>
            <Button size={"lg"}>Start Free Trial</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
