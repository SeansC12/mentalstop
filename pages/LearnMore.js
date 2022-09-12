import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { useState } from "react";
import "../public/closeButton.svg";
import Modal from "../components/LearnMore/Modal";

import "../public/learnMore/bipolarDisorderIcon.png";
import "../public/learnMore/depressionIcon.png";
import "../public/learnMore/ocdIcon.png";
import "../public/learnMore/ptsdIcon.png";
import { AnimatePresence, motion } from "framer-motion";

const myths = [
  {
    title: `Mental illnesses are rare.`,
    description: `- From the findings of the second Singapore Mental Health Study in 2016, one in seven people in Singapore have experienced a mental disorder such as bipolar disorder or alcohol abuse in their lifetime.
    - It is not uncommon to develop a mental health condition in one’s lifetime; however, it is important that treatment from mental health professionals is sought should a mental health condition arise.`,
  },
  {
    title: `People facing mental health issues can just “snap out of it".`,
    description: `- Mental illnesses are a form of illness that, like physical illnesses, are illnesses that a patient cannot help suffering from. They require proper treatment from professionals.
    - However, the conditions of mental illnesses are significantly less pronounced than the symptoms of a typical physical condition. Hence, many believe that mental illnesses may not be real or does not affect a person as much as a physical condition.`,
  },
  {
    title: `People with mental illnesses are violent.`,
    description: `- In the MacArthur Violence Risk Assessment Study, only two mental health conditions were linked to violent acts among patients with mental illnesses 20 weeks after discharge: “command hallucinations,” or psychotic voices telling a person to harm others; and psychopathy, a neuropsychiatric disorder marked by deficient emotional responses, lack of empathy, and poor behavioural controls.
    - A 1996 Health Canada review of scientific articles found that the key predictor of criminal behaviour is not mental illnesses, but past history of violence and criminal acts.`,
  },
  {
    title: `Mental illnesses are permanent.`,
    description: `There is no cure for mental illness, but there are many effective treatments (e.g. psychotherapy and medication). People with mental illnesses can recover and live long and healthy lives just like any other person.`,
  },
  {
    title: `Mental health therapy sessions are a waste of time.`,
    description: `- There may be some things related to your mental health condition that you prefer not to share with your friends and family. Therapy sessions from professionals provide a safe and private place for unbiased discussions on your emotions and feelings.
    - Through therapy sessions, you will also learn many useful techniques to live with mental health conditions in the long run, and live a happier life.`,
  },
];

const mentalIllnesses = [
  {
    name: "Depression",
    image: "/learnMore/depressionIcon.png",
    description: `Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.    `,
    color: "#C6DAF9",
  },
  {
    name: "Bipolar disorder",
    image: "/learnMore/bipolarDisorderIcon.png",
    description: `Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).    `,
    color: "#AFE9AA",
  },
  {
    name: "Obsessive-compulsive disorder (OCD)",
    image: "/learnMore/ocdIcon.png",
    description: `Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.    `,
    color: "#AFE9AA",
  },
  {
    name: "Post-traumatic stress disorder (PTSD)",
    image: "/learnMore/ptsdIcon.png",
    description: `Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.    `,
    color: "#C6DAF9",
  },
];

function LearnMore() {
  const [openedIllness, setOpenedIllness] = useState(-1);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenedIllness(-1);
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
        {openedIllness >= 0 && (
          <Modal
            data={mentalIllnesses[openedIllness]}
            setShowModal={setOpenedIllness}
          />
        )}
      </AnimatePresence>
      <div>
        <Header tab="Learn More" />

        <main className="font-Inter md:pb-96 pt-16 p-5 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
          <div className="text-3xl md:text-5xl font-lora">
            <p>Some of the most prominent myths,</p>
            <strong className="text-green-700">Debunked</strong>
          </div>

          <div>
            {myths.map((myth, i) => (
              <div className="rounded-2xl bg-gradient-to-r from-[rgb(190,220,190)] to-[rgb(200,240,200)] p-4 md:p-10 my-10 ">
                <p className="text-xl md:text-3xl pb-2 md:pb-5 font-bold">
                  {i + 1}. {myth.title}
                </p>
                <p className="text-md md:text-xl">{myth.description}</p>
              </div>
            ))}
          </div>

          <div className="pt-20">
            <strong className="text-3xl">
              Learn more about mental health conditions
            </strong>
            <div className="grid lg:grid-cols-2">
              {mentalIllnesses.map((illness, i) => (
                <div
                  className="grid grid-cols-2 rounded-xl h-fit mx-2 my-4 md:m-10"
                  style={{ backgroundColor: illness.color }}
                >
                  <div className="p-5 md:p-10 flex flex-col">
                    <p className="text-base sm:text-lg md:text-xl grow">
                      {illness.name}
                    </p>
                    <button
                      className="md:font-bold font-semibold text-xs sm:text-base md:text-xl bg-black rounded-full px-4 p-2 bg-opacity-10 w-max max-h-12"
                      onClick={() => setOpenedIllness(i)}
                    >
                      See More
                    </button>
                  </div>
                  <img
                    className="object-cover aspect-square w-full h-full"
                    src={illness.image}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LearnMore;
