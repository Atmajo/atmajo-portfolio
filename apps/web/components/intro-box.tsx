import { cn } from "@/lib/utils";
import React from "react";
import { Syne, Poppins, Raleway } from "next/font/google";
import { Button } from "./ui/button";

const syne = Syne({ subsets: ["greek"] });
const poppin = Poppins({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ weight: "400", subsets: ["latin"] });

const IntroBox = ({ className }: Introboxprops) => {
  return (
    <div className={cn(className, "")}>
      <h1 className={cn(poppin.className, "text-2xl lg:text-3xl")}>
        Hi I&apos;m Atmajo Chowdhury!
      </h1>
      
      <div className="relative my-10">
        <h1 className={cn(syne.className, "font-bold text-5xl lg:text-6xl")}>
          Web Developer
        </h1>
        <img src="/strike.svg" alt="stike" className="strike w-60 md:w-80 lg:w-" />
      </div>

      <p className={cn(raleway.className, "text-sm lg:text-lg font-light mt-16")}>
        Full stack developer with a passion for crafting seamless, responsive,
        <br />and user-friendly web applications.
      </p>

      <div className="flex mt-24 h-14 gap-10">
        <Button
          className={cn(
            syne.className,
            "text-xl px-5 h-full bg-[#8000FF] hover:bg-[#401c64]"
          )}
        >
          Say Hello
        </Button>

        <button
          className={cn(
            syne.className,
            "text-xl px-5 h-full border-2 border-[#8000FF] hover:border-[#401c64] rounded-lg"
          )}
        >
          Work Demo
        </button>
      </div>
    </div>
  );
};

export default IntroBox;
