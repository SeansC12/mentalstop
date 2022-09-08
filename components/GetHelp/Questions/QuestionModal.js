import React, { useState } from "react";
import questions from "../../../public/questions.json";
import { motion } from "framer-motion";
import "../../../public/closeButton.svg";
import { useRouter } from "next/router";
import Mcq from "./Mcq";
import Range from "./Range";

let questionScores = 0;

export default function QuestionModal({ setShowModal }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const router = useRouter();

  let input = 5;
  const handleSubmit = (input) => {
    if (questions[currentQuestionIndex].type === "mcq") {
      questionScores +=
        questions[currentQuestionIndex].answersToPoints[input[0]];
    } else {
      questionScores += questions[currentQuestionIndex].answersToPoints[input];
    }
    console.log(questionScores);
    if (currentQuestionIndex === questions.length - 1) {
      router.push(
        `/GetHelp/Questions/Results?result=${questionScores}`,
        "/GetHelp/Questions",
        { shallow: true }
      );
    } else {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed h-screen w-screen z-50 flex justify-center items-center"
    >
      <div
        className="absolute bg-black bg-opacity-50 w-full h-full z-40"
        onClick={() => setShowModal(false)}
      />

      <div className=" md:w-3/4 lg:w-1/2 h-2/3 lg:h-1/2 m-5 rounded-md p-5 bg-gradient-to-r from-[#C6DAF9] to-[#DFFFDC] z-50 relative">
        <img
          src="closeButton.svg"
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setShowModal(false)}
        />

        {currentQuestionIndex < 0 ? (
          <div className="text-center">
            <strong className="text-4xl">
              Mental well-being self assesment
            </strong>
            <p className="text-xl pt-10">
              Answer a few questions to determine if you may be at risk of
              mental health issues
              <br />
              Note that this isn't a professional diagnosis, it should be used
              as a rough gauge as <strong>TEXT</strong>
            </p>

            <button
              className="p-3 px-7 text-xl text-white rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)]"
              onClick={() => setCurrentQuestionIndex(0)}
            >
              Start!
            </button>
          </div>
        ) : questions[currentQuestionIndex].type === "range" ? (
          <Range
            question={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Mcq
            question={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </motion.div>
  );
}
