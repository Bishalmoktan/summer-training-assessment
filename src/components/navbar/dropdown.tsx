import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import newTag from "../../../public/newBadge.png"
import Image from "next/image";
import { navDropDown } from "@/data/navData";
import { Separator } from "../ui/separator";


const NavDropDownItem = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center cursor-pointer">
          Explore Courses <ChevronDown className="w-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full md:w-[500px]">
        {navDropDown.map((item) => (
            <>
            <DropdownMenuItem key={item.id} className="p-4">
            <Link href={item.link}>
            <div className="flex gap-2">
            <h2 className="text-base font-bold text-primary">{item.title}</h2>
         { item.isNew &&  <Image src={newTag} alt="new tag" className="w-10" />}
            </div>
            <p className="text-zinc-500">
                {item.description}
            </p>
            </Link>
          </DropdownMenuItem>
          <Separator />
            </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavDropDownItem;
