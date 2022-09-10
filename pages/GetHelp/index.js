import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import GetHelpCard from "../../components/GetHelp/Homepage/GetHelpCard";
import QuestionModal from "../../components/GetHelp/Questions/QuestionModal";
import { AnimatePresence } from "framer-motion";

const ourOptions = {
  Diary: {
    Header: "Take down your emotions and thoughts with Diary",
    Copy: "Write a short paragraph describing your emotions throughout the day, and our Diary AI will analyse your text using world-leading Machine Learning algorithms to gather trends in your feelings.",
    ButtonText: "Open Diary",
    ImageLink: "",
    redirectLink: "/GetHelp/Diary",
  },
  // Inquire: {
  //   Header: "Find out about how you’re feeling with Inquire",
  //   Copy: "Fill up a few questions, and our Inquire AI will use your responses to intelligently analyse trends in your feelings over past Inquire responses.",
  //   ButtonText: "Open Inquire",
  //   ImageLink: "",
  //   redirectLink: "/GetHelp/Questions",
  // },
};

const Inquire = {
  Header: "Find out about how you’re feeling with Inquire",
  Copy: "Fill up a few questions, and our Inquire AI will use your responses to intelligently analyse trends in your feelings over past Inquire responses.",
  ButtonText: "Open Inquire",
  ImageLink: "",
  redirectLink: "/GetHelp/Questions",
};

const mentalHealthHabits = {
  Header: "Learn more about positive mental health practices",
  Copy: "We have curated a list of the most effective positive mental health practices that you can do every day to help improve your mental health.",
  ButtonText: "Learn More",
  ImageLink: "",
  redirectLink: "/GetHelp/MentalHealthTips"
};

const professionalSupport = {
  Header: "Get professional support.",
  Copy: "Whatever is going on right now, remember that professional help is always one call away from you.",
  ButtonText: "Find Support",
  ImageLink: "",
  redirectLink: "/GetHelp/ProfessionalSupport"
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
  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowQuestions(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showQuestions && <QuestionModal setShowModal={setShowQuestions} />}
      </AnimatePresence>
      <>
        <Header tab="Get Help" />
        <main className="font-Inter pt-16 p-5 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
          <div>
            <p className="text-2xl md:text-5xl font-lora">
              "Happiness can be found even in the darkest of times, if one only
              remembers to{" "}
              <strong className="text-green-700">turn on the light.</strong>"
            </p>
            <p className="mt-3">- Albert Dumbledore</p>
          </div>
          <div>
            {/* Subheader */}
            <div className="font-lora text-center text-2xl mb-10 mt-10">
              Professional Help
            </div>
            <div className="grid place-items-center my-3">
              <div className="border border-[#1A8C10] w-[100%] rounded" />
            </div>

            <div className="mt-12 font-lora text-center text-2xl md:text-3xl">
              There is nothing to be <strong>ashamed</strong> about reaching out
              for help. Things get crazy and overwhelming, it's life.
            </div>
            <div className="mt-10">
              <GetHelpCard
                data={professionalSupport}
                index={0}
                link="/GetHelp/ProfessionalSupport"
              />
            </div>
          </div>

          <div>
            {/* Good Mental Health Practices */}
            {/* Header */}
            <div className="grid place-items-center my-10">
              <div className="border border-[#1A8C10] w-[100%] rounded" />
            </div>

            <div className="font-lora text-center text-xl md:text-3xl">
              Mental Health is also about <strong>protecting</strong> yourself
              and
              <strong> maintaining</strong> a healthy mental lifestyle
            </div>
            <div className="md:mx-[12.5%]">
              <div className="font-Inter text-center md:text-md m-5">
                We experience varying emotions, ranging from happiness to
                sadness to anger and more. On some days, we may feel energised
                while on other days, we may feel stressed. It is normal to feel
                all kinds of emotions because mental well-being is about
                accepting and embracing all these emotions.
              </div>

              <iframe
                src="https://www.youtube.com/embed/WeY79OCq9bI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-full md:max-w-[70%] md:w-[70%] aspect-video mx-auto"
              ></iframe>

              <div className="mt-12 mb-5 font-lora text-center text-xl">
                Sustaining mental-wellbeing requires{" "}
                <strong>time and effort. </strong>Click the card below and start
                adopting positive mental health habits!
              </div>
              <GetHelpCard
                data={mentalHealthHabits}
                index={2}
                link="/GetHelp/MentalHealthTips"
              />
            </div>

            {/* <div className="mt-10 mb-5 font-lora text-center text-3xl">
              Taking care of our <strong>mental wellbeing</strong>
            </div>

            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/WeY79OCq9bI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-full md:max-w-[70%] md:w-[70%] aspect-video"
              ></iframe>
            </div>
            <div className="mt-12 mb-5 font-lora text-center text-xl">
              Sustaining mental-wellbeing requires{" "}
              <strong>time and effort. </strong>Click the card below and start
              adopting positive mental health habits!
            </div>
            <GetHelpCard
              data={mentalHealthHabits}
              index={2}
              link="/GetHelp/MentalHealthTips"
            /> */}
          </div>

          <div className="my-10 grid place-items-center">
            <div className="border border-[#1A8C10] rounded w-[100%]"></div>
          </div>

          <div>
            {" "}
            {/* Self-Assessment */}
            {/* Header */}
            <div className="mt-10 mb-5 font-lora text-center text-3xl">
              <strong>Mental well-being self-assessment tools</strong>
            </div>
            <div className="md:px-10">
              <div className="mb-5 font-lora text-center text-lg">
                Our mental well-being is important because it affects how we
                handle stress and tackle the different demands in our lives.
                Having a positive mindset and being resilient can directly
                affect our overall well-being.
              </div>
              <div className="mb-10 font-lora text-center text-lg">
                Below are 2 of our specially designed self-assessment tools
                which will help you to assess your mental well-being. Note that
                it is only suitable for those{" "}
                <strong>aged 13 and above.</strong>
              </div>
            </div>
            {ourOptionsComponentArray.map((component, key) => (
              <div className="mb-8" key={key}>
                {component}
              </div>
            ))}
            {/* Questionnaire */}
            <div
              className={`flex flex-col p-4 md:p-8 text-left mb-8 bg-slate-500 rounded-2xl font-Inter min-h-56 bg-cover bg-[url("https://images.unsplash.com/photo-1554757387-2a28855c78fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")]`}
            >
              <h1 className="font-normal font-lora text-2xl md:text-4xl">
                {Inquire.Header}
              </h1>
              <h2 className="font-medium font-Inter my-2 md:text-xl">
                {Inquire.Copy}
              </h2>
              <button
                onClick={() => {
                  setShowQuestions(true);
                }}
                className={`rounded-2xl px-4 py-2 w-max bg-[#E2DB98]`}
                // style={{ backgroundColor: colours[((index + 1) % 4) - 1] }}
              >
                {Inquire.ButtonText}
              </button>
            </div>
          </div>
        </main>
      </>
    </>
  );
}

export default GetHelp;
