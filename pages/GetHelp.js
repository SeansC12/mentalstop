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

const mentalHealthHabits = {
  Header: "Learn more about positive mental health practices",
  Copy: "We have curated a list of the most effective positive mental health practices that you can do every day to help improve your mental health.",
  ButtonText: "Learn More",
  ImageLink: "",
};

const professionalSupport = {
  Header: "Get professional support.",
  Copy: "If none of the self-help techniques work for you, remember that professional help is always one call away from you.",
  ButtonText: "Find Support",
  ImageLink: "",
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
          {/* Professional Support */}
          {/* Header */}
          <div className="font-Inter text-center text-md mt-10">Seek Help</div>
          {/* Line */}
          <div className="grid place-items-center my-3">
            <div className="border border-[#1A8C10] w-5 rounded" />
          </div>
          {/* Subheader */}
          <div className="font-lora text-center text-2xl mb-10 -mt-2">
            Professional Help
          </div>
          <div className="grid place-items-center my-3">
            <div className="border border-[#1A8C10] w-[75%] rounded" />
          </div>

          <div className="mt-12 font-lora text-center text-3xl">
            There is nothing to be <strong>ashamed</strong> about reaching out
            for help. Things get crazy and overwhelming, it's life.
          </div>
          <div className="mt-10">
            <GetHelpCard data={professionalSupport} index={0} />
          </div>
        </div>

        <div>
          {/* Good Mental Health Practices */}
          {/* Header */}
          <div className="font-Inter text-center text-md mt-20">Seek Help</div>

          {/* Line */}
          <div className="grid place-items-center my-3">
            <div className="border border-[#1A8C10] w-5 rounded" />
          </div>

          {/* Subheader */}
          <div className="font-lora text-center text-2xl mb-10 -mt-2">
            Positive Mental Health Practices
          </div>

          <div className="grid place-items-center my-3">
            <div className="border border-[#1A8C10] w-[75%] rounded" />
          </div>

          <div className="mt-12 font-lora text-center text-3xl">
            Mental Health is also about <strong>protecting</strong> yourself and
            <strong> maintaining</strong> a healthy mental lifestyle
          </div>
          <div className="mx-[12.5%]">
            <div className="font-Inter text-center text-md mt-10">
              We experience varying emotions, ranging from happiness to sadness
              to anger and more. On some days, we may feel energised while on
              other days, we may feel stressed. It is normal to feel all kinds
              of emotions because mental well-being is about accepting and
              embracing all these emotions.
            </div>

            <div className="font-Inter text-center text-md mt-8">
              <strong>It’s okay not to be okay at times.</strong> We all face
              different challenges daily, sometimes it can be tiring and
              overwhelming. Hence, it is paramount that we understand how to
              cope with our emotions and events happening around us.
            </div>
          </div>

          <div className="my-10 grid place-items-center">
            <div className="border border-[#1A8C10] rounded w-[75%]"></div>
          </div>

          <div className="mb-5 font-lora text-center text-3xl">
            Taking care of our <strong>mental wellbeing</strong>
          </div>

          <div className="flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/WeY79OCq9bI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-full max-w-full md:max-w-[70%] md:w-[70%] aspect-video"
            ></iframe>
          </div>
          <div className="mt-12 mb-5 font-lora text-center text-xl">
            Sustaining mental-wellbeing requires{" "}
            <strong>time and effort. </strong>Click the card below and start
            adopting positive mental health habits!
          </div>
          <GetHelpCard data={mentalHealthHabits} index={2} />
        </div>

        <div className="my-10 grid place-items-center">
          <div className="border border-[#1A8C10] rounded w-[75%]"></div>
        </div>

        <div>
          {" "}
          {/* Self-Assessment */}
          {/* Header */}
          <div className="font-Inter text-center text-md mt-12">
            Self-Assessment
          </div>
          {/* Line */}
          <div className="grid place-items-center my-3">
            <div className="border border-[#1A8C10] w-5 rounded" />
          </div>
          {/* Subheader */}
          <div className="font-lora text-center text-2xl mb-10 -mt-2">
            Explore our options
          </div>
          {ourOptionsComponentArray.map((component, key) => (
            <div className="mb-8" key={key}>
              {component}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default GetHelp;
