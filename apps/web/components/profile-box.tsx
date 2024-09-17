import React from "react";
import Image from "next/image";
import { socials } from "@/data";
import Link from "next/link";

const ProfileBox = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 h-max z-30">
      <Image
        src={"/atmajo.png"}
        alt="atmajo"
        width={300}
        height={300}
        className="relative md:w-60 h-full z-30"
      />
      <div className="flex flex-row lg:flex-col gap-5">
        {socials.map(({ logo, title, url }, _id) => (
          <Link
            href={url}
            key={_id}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-slate-400/40 rounded-full"
          >
            <Image src={logo} alt={title} width={32} height={32} className="w-9 h-9" />
          </Link>
        ))}
      </div>
      <div className="eclipse-two hidden md:block z-0"></div>
    </div>
  );
};

export default ProfileBox;
