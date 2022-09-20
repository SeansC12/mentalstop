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
import useWindowDimensions from "../hooks/useWindowDimensions";
import Footer from "../components/footer";

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
    title: "Take a look at some good mental health practices",
    buttonLabel: "Explore",
    imageLink: "helpOthersImg.png",
    bgColour: "#AFE9AA",
    cardLink: "/GetHelp/MentalHealthTips",
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

const buttonColours = [
  { backgroundColor: "#6be161" },
  { backgroundColor: "#6aa3f9" },
];

const backgroundColourStyle = [
  { background: "linear-gradient(to right, #AFE9AA, #c7f4c3)" },
  { background: "linear-gradient(to right, #C6DAF9, #d2edeb)" },
];

export default function Home() {
  const [selectedImportance, setSelectedImportance] = useState(0);

  return (
    <div>
      <Header tab="Home" />
      <main className="h-full font-Inter pb-14 p-10 pt-16 md:p-16 bg-gradient-to-br from-[#DFFFDC] to-[#E5E5DB]">
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
          <div className="align-top text-lg sm:text-xl md:text-2xl lg:text-4xl w-full leading-normal">
            <strong>
              Need help urgently?
              <br />
              Call the Samaritans of Singapore at 1-767
            </strong>
          </div>
          <a href="tel:1-767">
            <img className="h-32" src="callIcon.svg" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl pt-16 font-bold">
            Explore our options:
          </p>

          <div className="grid md:grid-cols-2 h-fit place-items-center lg:w-[80%] gap-7 md:gap-14 m-auto mt-8">
            {cardInfos.map((cardInfo, key) => (
              <div
                key={key}
                className="rounded-2xl w-full h-full text-left p-4 md:p-8 flex flex-col"
                // style={key === 0 || key === 3 ? backgroundColourStyle[0] : backgroundColourStyle[1]}
                style={{
                  backgroundColor:
                    key === 0 || key === 3
                      ? "rgb(211, 233, 233)"
                      : "rgb(202, 234, 195)",
                }}>
                <p className="text-base sm:text-lg md:text-2xl xl:text-4xl font-lora">
                  {cardInfo.title}
                </p>
                <div className="flex flex-row">
                  <div className="w-full h-full flex justify-center items-center sm:justify-start sm:items-end">
                    <Link href={cardInfo.cardLink}>
                      <div
                        className="text-xs lg:text-xl cursor-pointer shadow w-max h-max py-2 px-4 font-bold md:py-2 md:px-6 rounded-full font-Inter"
                        style={{
                          backgroundColor:
                            key === 0 || key === 3
                              ? "rgb(198, 218, 249)"
                              : "rgb(175, 233, 170)",
                        }}>
                        {cardInfo.buttonLabel}
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full aspect-square"
                      src={cardInfo.imageLink}></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-2xl md:text-4xl pt-16 font-bold mb-10">
            It's OKAY to reach out
          </div>
          <div className="px-2 md:px-16">
            <div className="text-base">
              With the daily struggles from life, it is normal to feel stressed,
              sad or even worried. These emotions are very common, and it
              happens to everyone. We are not the only ones facing difficulties
              and struggles. When we feel overwhelmed, we can always reach out.
            </div>
            <div className="w-full flex items-center justify-center">
              {useWindowDimensions().width > 1200 && (
                <img src="encouragement1.png" width="150" height="150" />
              )}
              <iframe
                src="https://www.youtube.com/embed/tYj6oJhZrAw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
                className="w-full aspect-video my-7 mx-20 md:mx-16"
              />
              {useWindowDimensions().width > 1200 && (
                <img src="encouragement2.png" width="200" height="200" />
              )}
            </div>
            <div className="text-xl font-bold">
              There is nothing to be ashamed of. Everyone goes through hard
              times, do not be afraid to reach out for help.
            </div>
            <div className="w-full flex justify-center items-center">
              {useWindowDimensions().width < 1200 && (
                <img src="encouragement2.png" width="200" height="200" />
              )}
            </div>
          </div>
          <div className="mt-5 mb-10 grid place-items-center">
            <div className="border border-[#1A8C10] rounded w-[100%]"></div>
          </div>
          <div className="text-2xl md:text-4xl font-Inter font-bold mb-10">
            Why is it important to seek for help?
          </div>
          <div className="grid grid-cols-1 grid-rows-[17rem_full] gap-5 md:grid-cols-[25%_75%] md:grid-rows-1">
            <div className="flex flex-col gap-3">
              <div
                className={
                  selectedImportance === 0
                    ? "w-full rounded-full h-max bg-yellow-100 text-lg py-6 cursor-pointer shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(0)}>
                Performance
              </div>
              <div
                className={
                  selectedImportance === 1
                    ? "w-full rounded-full h-max bg-yellow-100 text-lg py-6 cursor-pointer shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(1)}>
                Quality of Life
              </div>
              <div
                className={
                  selectedImportance === 2
                    ? "w-full rounded-full h-max bg-yellow-100 text-lg py-6 cursor-pointer shadow-2xl"
                    : "w-full rounded-full h-max bg-white text-lg py-6 cursor-pointer"
                }
                onClick={() => setSelectedImportance(2)}>
                Relationships
              </div>
            </div>
            {useWindowDimensions().width >= 850 && (
              <div className="w-full h-[110%] rounded-xl bg-white p-4 grid grid-cols-[25%_75%] grid-rows-1">
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
            )}
            {useWindowDimensions().width < 850 && (
              <div className="w-full h-[110%] rounded-xl bg-white p-4 flex flex-col">
                <div className="grid grid-cols-[25%_75%] gap-3">
                  <img
                    src={
                      reachingOutForHelpImportance[selectedImportance].iconLink
                    }
                    className="w-full aspect-square"
                  />
                  <div className="flex items-center justify-center text-lg md:text-xl font-lora font-bold">
                    {reachingOutForHelpImportance[selectedImportance].header}
                  </div>
                </div>
                <div className="grow flex items-center justify-center">
                  <div>
                    {reachingOutForHelpImportance[selectedImportance].copy}
                  </div>
                </div>
                {/* <div className="flex flex-col items-center justify-start">
                  <div className="text-lg md:text-xl font-lora font-bold">
                    {reachingOutForHelpImportance[selectedImportance].header}
                  </div>
                  <div className="grow flex items-center justify-center">
                    <div>
                      {reachingOutForHelpImportance[selectedImportance].copy}
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
