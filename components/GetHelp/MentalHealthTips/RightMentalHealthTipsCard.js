import React from "react";
import "../../../public/meditationImage.jpg";

function RightMentalHealthTipsCard({ data }) {
  const { title, description, imageLink } = data;
  return (
    <div className="flex">
      <img
        className="w-1/4 object-cover m-auto px-10 rounded-xl"
        src={imageLink}
      />
      <div className="">
        <h1 className="text-3xl text-[#577AAF]">{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default RightMentalHealthTipsCard;
