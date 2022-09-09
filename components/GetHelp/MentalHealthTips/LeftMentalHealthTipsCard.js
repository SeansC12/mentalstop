import React from "react";

function LeftMentalHealthTipsCard({ data }) {
  const { title, description, imageLink } = data;
  return (
    <div className="flex">
      <div className="">
        <h1 className="text-3xl text-[#577AAF]">{title}</h1>
        <h2>{description}</h2>
      </div>
      <img
        className="w-1/4 object-cover m-auto px-10 rounded-xl"
        src={imageLink}
      />
    </div>
  );
}

export default LeftMentalHealthTipsCard;
