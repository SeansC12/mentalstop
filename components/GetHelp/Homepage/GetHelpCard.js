import React from "react";
import Router from "next/router";
import { ArrowRightIcon } from "@heroicons/react/outline";

function GetHelpCard({ data, index, onClickHandler }) {
  let { Header, Copy, ButtonText, redirectLink } = data;

  const buttonColours = [
    { backgroundColor: "#6be161" },
    { backgroundColor: "#6aa3f9" },
  ];

  const backgroundColourStyle = [
    { background: "linear-gradient(to right, #AFE9AA, #c7f4c3)" },
    { background: "linear-gradient(to right, #C6DAF9, #d2edeb)" },
  ];

  return (
    <div
      className="flex flex-col p-4 md:p-8 text-left rounded-2xl min-h-56 shadow-lg bg-cover"
      style={backgroundColourStyle[index % 2]}
    >
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
        className={`rounded-full shadow-lg px-4 py-2 w-max`}
        style={buttonColours[index % 2]}
      >
        {ButtonText}
      </button>
    </div>
  );
}

export default GetHelpCard;
