import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import "../public/callIcon.svg";

const cardInfos = [
  {
    title: "Get support if you are\nfeeling down.",
    buttonLabel: "Help yourself",
    imageLink: "",
    bgColour: "#C6DAF9",
    cardLink: "/GetHelp",
  },
  {
    title: "Learn more about mental illnesses.",
    buttonLabel: "Learn More",
    imageLink: "",
    bgColour: "#AFE9AA",
    cardLink: "/LearnMore",
  },
  {
    title: "Help someone else in need.",
    buttonLabel: "Help others",
    imageLink: "",
    bgColour: "#AFE9AA",
    cardLink: "/OfferHelp",
  },
  {
    title: "Support mental health organisations.",
    buttonLabel: "Donate",
    imageLink: "",
    bgColour: "#C6DAF9",
    cardLink: "/Donate",
  },
];

export default function Home() {
  return (
    <div>
      <Header tab="Home" />
      <main className="h-full p-10 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
        <div>
          <p className="text-3xl">
            "Not until we are lost, <br />
            do we begin to{" "}
            <strong className="text-green-700">understand ourselves</strong>"
            <br />
          </p>
          <p className="mt-3">- Henry David Thoreau</p>
        </div>
        <div className="flex w-full h-[30vh] rounded-2xl p-10 bg-gradient-to-r from-[#D23737] to-[#DC5858] items-center text-white mt-10">
          <div className="text-5xl w-full">
            <p>Need help urgently?</p>
            <p>Call the samaritans of singapore at 1-767</p>
          </div>
          <img className="h-32" src="callIcon.svg"></img>
        </div>
        <div className="flex-row justify-center h-[75vh] text-center">
          <p className="text-2xl pt-10 p-5 font-bold">Explore our options:</p>
          <div className="grid md:grid-cols-2 h-full place-items-center">
            {cardInfos.map((cardInfo) => (
              <div
                className="rounded-xl w-[90%] h-[90%] text-left px-5 py-4"
                style={{ backgroundColor: cardInfo.bgColour }}
              >
                <p className="text-3xl">{cardInfo.title}</p>
                <div className="">
                  <Link href={cardInfo.cardLink}>
                    <p className="bg-opacity-10 bg-black cursor-pointer w-fit h-fit p-2 px-5 rounded-full">
                      {cardInfo.buttonLabel}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
