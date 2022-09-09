import React from "react";

function LeftMentalHealthTipsCard({ data }) {
  const { title, description, imageLink } = data;
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <h1 className="text-3xl text-[#577AAF]">{title}</h1>
        <h2>{description}</h2>
      </div>
      <img
        className="object-cover rounded-xl m-10"
        src={imageLink}
      />
    </div>
  );
}

export default LeftMentalHealthTipsCard;
