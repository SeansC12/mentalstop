import React from "react";
import Image from "next/image";

function GetHelpCard({ data, index }) {
  const { Header, Copy, ButtonText } = data;
  const colours = ["#DED4D4", "#E2DB98", "#AFE9AA", "#C6DAF9"];
  return (
    <div
      className={`relative flex flex-col text-left bg-slate-500 rounded-2xl font-Inter overflow-hidden max-h-56`}
    >
      <img
        src="https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        className="w-full h-full"
      />
      <div className="absolute z-10 flex flex-col gap-3 m-8">
        <h1 className="font-normal text-4xl">{Header}</h1>
        <h2 className="font-medium text-xl">{Copy}</h2>
        <button
          className={`bg-[${
            colours[((index + 1) % 4) - 1]
          }] rounded-2xl px-4 py-2 w-max`}
        >
          {ButtonText}
        </button>
      </div>
    </div>
  );
}

export default GetHelpCard;
