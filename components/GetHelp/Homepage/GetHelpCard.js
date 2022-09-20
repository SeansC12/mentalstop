import React from "react";
import Router from "next/router";
import { ArrowRightIcon } from "@heroicons/react/outline";

function GetHelpCard({ data, index, onClickHandler }) {
  let { Header, Copy, ButtonText, redirectLink } = data;

  const buttonColours = [
    { backgroundColor: "rgb(175, 233, 170)" },
    { backgroundColor: "rgb(198, 218, 249)" },
  ];

  const backgroundColourStyle = [
    { background: "rgb(202, 234, 195)" },
    { background: "rgb(211, 233, 233)" },
  ];

  return (
    <div
      className="flex flex-col p-4 md:p-8 text-left rounded-2xl min-h-56 shadow-lg bg-cover"
      style={backgroundColourStyle[index % 2]}>
      <h1 className="font-normal font-lora text-2xl md:text-4xl">{Header}</h1>
      <h2 className="font-normal font-Inter my-2 md:text-lg">{Copy}</h2>
      <button
        onClick={() => {
          if (typeof redirectLink === "string") {
            Router.push(`${redirectLink}`);
          } else {
            onClickHandler();
          }
        }}
        className="rounded-full shadow font-bold px-4 py-2 w-max"
        style={buttonColours[index % 2]}>
        {ButtonText}
      </button>
    </div>
  );
}

export default GetHelpCard;
