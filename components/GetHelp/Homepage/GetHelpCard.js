import React from "react";
import Router from "next/router";

function GetHelpCard({ data, index, link }) {
  let { Header, Copy, ButtonText, ImageLink, redirectLink } = data;
  ImageLink =
    "https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
  const colours = ["#DED4D4", "#E2DB98", "#AFE9AA", "#C6DAF9"];
  return (
    <div
      className={`flex flex-col gap-3 p-8 text-left bg-slate-500 rounded-2xl font-Inter min-h-56 bg-cover bg-[url("https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")]`}
    >
      <h1 className="font-normal font-lora text-4xl">{Header}</h1>
      <h2 className="font-medium font-Inter text-xl">{Copy}</h2>
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
