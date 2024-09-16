import React from "react";
import Image from "next/image";
import { socials } from "@/data";
import Link from "next/link";

const ProfileBox = () => {
  return (
    <div className="flex justify-center items-center gap-20 z-30">
      <Image src={"/atmajo.png"} alt="atmajo" width={300} height={300} className="relative z-30" />
      <div className="flex flex-col gap-5">
        {socials.map(({ logo, title, url }, _id) => (
          <Link href={url} key={_id} target="_blank" rel="noopener noreferrer" className="hover:bg-slate-400/40 rounded-full">
            <Image
              src={logo}
              alt={title}
              width={100}
              height={100}
              className="w-9 h-9"
            />
          </Link>
        ))}
      </div>
      <div className="eclipse-two z-0"></div>
    </div>
  );
};

export default ProfileBox;
