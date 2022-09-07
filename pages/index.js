import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import "../public/callIcon.svg";
import "../public/donateImg.png";
import "../public/helpOthersImg.png";
import "../public/helpYourselfImg.png";
import "../public/learnMoreImg.png";
import "../public/encouragement1.png";
import "../public/encouragement2.png";
import "../public/performance.png";
import "../public/qualityOfLife.png";
import "../public/relationships.png";

const cardInfos = [
  {
    title: "Get support if you are feeling down.",
    buttonLabel: "Help yourself",
    imageLink: "helpYourselfImg.png",
    bgColour: "#C6DAF9",
    cardLink: "/GetHelp",
  },
  {
    title: "Learn more about mental illnesses.",
    buttonLabel: "Learn More",
    imageLink: "learnMoreImg.png",
    bgColour: "#AFE9AA",
    cardLink: "/LearnMore",
  },
  {
    title: "Help someone else in need.",
    buttonLabel: "Help others",
    imageLink: "helpOthersImg.png",
    bgColour: "#AFE9AA",
    cardLink: "/OfferHelp",
  },
  {
    title: "Support mental health organisations.",
    buttonLabel: "Donate",
    imageLink: "donateImg.png",
    bgColour: "#C6DAF9",
    cardLink: "/Donate",
  },
];

const reachingOutForHelpImportance = [
  {
    header: "It will improve your performance in work and school",
    copy: "Poor mental health have the potential to make us demotivated and despondent. Seeking help allows you to learn how to manage challenges that can affect your well-being and mental fitness. You’ll perform to the best of your ability, even when you are under pressure.",
    iconLink: "performance.png",
  },
  {
    header: "It will drastically improve your quality of life",
    copy: "Acquiring help will assist you in strengthening your relationships and meeting new friends. You’ll also learn how to cope with challenges that arrive on a daily basis, while discovering what does and doesn’t work for you. All of these things can positively benefit your life in the long run while creating a healthier and happier you.",
    iconLink: "qualityOfLife.png",
  },
  {
    header: "It will build relationships that last",
    copy: "Mental health counseling will empower you to reconnect with your loved ones. You’ll build better, healthier relationships through clear and honest communication.",
    iconLink: "relationships.png",
  },
];

export default function Home() {
  const [selectedImportance, setSelectedImportance] = useState(0);

  return (
    <div>
      <Header tab="Home" />
      <main className="h-full font-Inter pb-96 p-10 pt-16 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
        <div>
          <p className="text-2xl md:text-5xl font-lora">
            "Not until we are lost, <br />
            do we begin to{" "}
            <strong className="text-green-700">understand ourselves</strong>"
            <br />
          </p>
          <p className="mt-3">- Henry David Thoreau</p>
        </div>
        <div className="flex h-[30vh] rounded-2xl p-2 md:p-10 bg-gradient-to-r from-[#D23737] to-[#DC5858] items-center text-white mt-10">
          <div className="align-top text-lg md:text-4xl w-full leading-normal">
            <strong>
              Need help urgently?
              <br />
              Call the Samaritans of Singapore at 1-767
            </strong>
          </div>
          <a href="tel:1-767">
            <img className="h-32" src="callIcon.svg" />
          </a>
          <img className="h-32" src="callIcon.svg"></img>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl pt-16 font-bold">
            Explore our options:
          </p>

          <div className="grid md:grid-cols-2 h-fit place-items-center md:w-[80%] gap-7 md:gap-14 m-auto mt-8">
            {cardInfos.map((cardInfo, key) => (
              <div
                key={key}
                className="rounded-2xl w-full h-full text-left p-4 md:p-8 relative"
                style={{ backgroundColor: cardInfo.bgColour }}
              >
                <p className="text-xl sm:text-2xl xl:text-4xl font-lora">
                  {cardInfo.title}
                </p>
                <div className="absolute bottom-8 w-fit">
                  <Link href={cardInfo.cardLink}>
                    <b className="text-sm md:text-xl bg-opacity-10 bg-black cursor-pointer w-fit h-fit py-2 px-6 rounded-full font-Inter">
                      {cardInfo.buttonLabel}
                    </b>
                  </Link>
                </div>
                <img className="w-32 ml-auto" src={cardInfo.imageLink}></img>
              </div>
            ))}
          </div>
          <div className="text-2xl md:text-4xl pt-16 font-bold mb-10">
            It's OKAY to reach out
          </div>
          <div className="px-20">
            <div className="text-base">
              With the daily struggles from life, it is normal to feel stressed,
              sad or even worried. These emotions are very common, and it
              happens to everyone. We are not the only ones facing difficulties
              and struggles. When we feel overwhelmed, we can always reach out.
            </div>
            <div className="w-full flex items-center justify-center">
              <img src="encouragement1.png" width="150" height="150" />
              <iframe
                width="600"
                height="355"
                src="https://www.youtube.com/embed/tYj6oJhZrAw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="my-7 mx-16"
              />
              <img src="encouragement2.png" width="200" height="200" />
            </div>
            <div className="text-xl font-bold">
              There is nothing to be ashamed of. Everyone goes through hard
              times, do not be afraid to reach out for help
            </div>
          </div>
          <div className="my-10 grid place-items-center">
            <div className="border border-[#1A8C10] rounded w-[100%]"></div>
          </div>
          <div className="text-2xl md:text-4xl font-Inter font-bold mb-10">
            Why is it important to seek for help?
          </div>
          <div className="grid grid-cols-[25%_75%] grid-rows-1 gap-5">
            <div className="flex flex-col gap-3">
              <div
                className={
                  selectedImportance === 0
                    ? "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer opacity-60 shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(0)}
              >
                Performance
              </div>
              <div
                className={
                  selectedImportance === 1
                    ? "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer opacity-60 shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(1)}
              >
                Quality of Life
              </div>
              <div
                className={
                  selectedImportance === 2
                    ? "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer opacity-60 shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(2)}
              >
                Relationships
              </div>
            </div>
            <div className="w-full h-full rounded-xl bg-white p-4 grid grid-cols-[25%_75%] grid-rows-1">
              <div className="flex justify-center items-center">
                <img
                  src={
                    reachingOutForHelpImportance[selectedImportance].iconLink
                  }
                  className="w-3/4 aspect-square"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="text-lg md:text-xl font-lora font-bold">
                  {reachingOutForHelpImportance[selectedImportance].header}
                </div>
                <div className="grow flex items-center justify-center">
                  <div>
                    {reachingOutForHelpImportance[selectedImportance].copy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
