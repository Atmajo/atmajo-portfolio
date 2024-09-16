import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navdata } from "@/data";

import { Syne, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const syne = Syne({ subsets: ["greek"] });
const poppin = Poppins({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className={"md:px-20 md:py-10"}>
      <nav className="hidden md:flex flex-row justify-between items-center h-14">
        <h1 className={cn(syne.className, "flex items-center text-4xl h-full")}>Atmajo.</h1>
        <div className="flex justify-center items-center gap-10 px-5 h-14 navbox_bg">
          {navdata.map(({ title, url }, _id) => (
            <Link key={_id} href={url} className={cn(poppin.className, "")}>
              {title}
            </Link>
          ))}
        </div>
        <Button
          className={cn(
            syne.className,
            "text-xl px-5 h-full bg-[#8000FF] hover:bg-[#401c64]"
          )}
        >
          Hire me
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
