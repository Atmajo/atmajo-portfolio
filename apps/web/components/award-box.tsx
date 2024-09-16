import { awarddata } from "@/data";
import React from "react";

const AwardBox = () => {
  return (
    <div className="flex justify-around items-center mt-16 mb-20 px-10 award-box h-28">
      {awarddata.map(({ title, value }, _id) => (
        <div key={_id} className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{value}</h1>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default AwardBox;
