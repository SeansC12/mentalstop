import React from "react";
import Header from "../components/Header/Header";
import GetHelpCard from "../components/GetHelp/GetHelpCard";

const ourOptions = {
  Diary: {
    Header: "Take down your emotions and thoughts with Diary",
    Copy: "Write a short paragraph describing your emotions throughout the day, and our Diary AI will analyse your text using world-leading Machine Learning algorithms to gather trends in your feelings.",
    ButtonText: "Open Diary",
    ImageLink: "",
  },
  Inquire: {
    Header: "Find out about how you’re feeling with Inquire",
    Copy: "Fill up a few questions, and our Inquire AI will use your responses to intelligently analyse trends in your feelings over past Inquire responses.",
    ButtonText: "Open Inquire",
    ImageLink: "",
  },
};

const optionsArray = [];
let ourOptionsComponentArray = [];

for (const option in ourOptions) {
  optionsArray.push(option.toString());
  ourOptionsComponentArray.push(
    <GetHelpCard
      index={optionsArray.indexOf(option.toString())}
      data={ourOptions[option]}
    />
  );
}

function GetHelp() {
  return (
    <div>
      <Header tab="Get Help" />
      <main className="h-full font-Inter pb-96 p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
        <div>
          <p className="text-5xl font-lora">
            "Happiness can be found even in the darkest of times, if one only
            remembers to{" "}
            <strong className="text-green-700">turn on the light.</strong>"
            <br />
          </p>
          <p className="mt-3">- Albert Dumbledore</p>
        </div>
        <div>
          {/* Self-Assessment */}
          {ourOptionsComponentArray.map((component, key) => (
            <div className="mb-8" key={key}>
              {component}
            </div>
          ))}
        </div>
        <div>{/* Professional Support */}</div>
      </main>
    </div>
  );
}

export default GetHelp;
