import React from "react";
import Image from "next/image";
import { socials } from "@/data";
import Link from "next/link";

const ProfileBox = () => {
  return (
    <div className="flex justify-center items-center gap-20">
      <Image src={"/atmajo.png"} alt="atmajo" width={400} height={300} />
      <div className="flex flex-col gap-5">
        {socials.map(({ logo, title, url }, _id) => (
          <Link href={url} key={_id} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default ProfileBox;
