import React from "react";
import Router from "next/router";

function GetHelpCard({ data, index }) {
  let { Header, Copy, ButtonText, ImageLink, redirectLink } = data;

  const colours = ["#DED4D4", "#E2DB98", "#AFE9AA", "#C6DAF9"];
  return (
    <div
      className={`flex flex-col p-4 md:p-8 text-left bg-slate-500 rounded-2xl min-h-56 bg-cover`}
      style={{backgroundImage: `url(${ImageLink})`, width: "100%", height: "100%"}}
    >
      <h1 className="font-normal font-lora text-2xl md:text-4xl">{Header}</h1>
      <h2 className="font-medium font-Inter my-2 md:text-xl">{Copy}</h2>
      <button
        onClick={() => {
          Router.push(`${redirectLink}`);
        }}
        className={`rounded-2xl px-4 py-2 w-max`}
        style={{ backgroundColor: colours[((index + 1) % 4) - 1] }}
      >
        {ButtonText}
      </button>
    </div>
  );
}

export default GetHelpCard;
