"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navdata } from "@/data";

import { Syne, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const syne = Syne({ subsets: ["greek"] });
const poppin = Poppins({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className={"py-5 md:py-10 overflow-hidden"}>
      <nav className="hidden md:flex flex-row justify-between items-center h-10 lg:h-14">
        <h1
          className={cn(
            syne.className,
            "flex items-center text-3xl lg:text-4xl h-full"
          )}
        >
          Atmajo.
        </h1>
        <div className="flex justify-center items-center gap-10 px-5 h-10 lg:h-14 navbox_bg">
          {navdata.map(({ title, url }, _id) => (
            <Link key={_id} href={url} className={cn(poppin.className, "")}>
              {title}
            </Link>
          ))}
        </div>
        <Button
          className={cn(
            syne.className,
            "text-xl px-3 lg:px-5 h-full bg-[#8000FF] hover:bg-[#401c64]"
          )}
        >
          Hire me
        </Button>
      </nav>

      <nav className="flex justify-between items-center md:hidden">
        <h1
          className={cn(
            syne.className,
            "flex items-center text-3xl lg:text-4xl h-full"
          )}
        >
          Atmajo.
        </h1>
        <Sheet>
          <SheetTrigger>
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent side={"right"} className="bg-[#000319] w-72 border-0">
            <div className="flex flex-col justify-start items-start gap-10">
              {navdata.map(({ title, url }, _id) => (
                <Link key={_id} href={url} className={cn(poppin.className, "")}>
                  {title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
