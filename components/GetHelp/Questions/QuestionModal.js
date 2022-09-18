import React, { useEffect, useState } from "react";
import questions from "../../../public/questions.json";
import { motion } from "framer-motion";
import "../../../public/closeButton.svg";
import "../../../public/questionnaireIcon.png";
import Mcq from "./Mcq";
import Range from "./Range";
import Results from "./Results";

let questionScores = 0;

export default function QuestionModal({ setShowModal }) {
  useEffect(() => {
    // needed as user leaving qns and coming back will not reset prev score
    questionScores = 0;
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questionsEnded, setQuestionsEnded] = useState(false);

  const wrapperDivVariant = {
    questionsNotEnded: {
      opacity: 1,
    },
    questionsEnded: {
      opacity: 1,
    },
  };

  const modalDivVariant = {
    questionsNotEnded: {
      height: "60%",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    questionsEnded: {
      height: "75%",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const handleSubmit = (input) => {
    if (questions[currentQuestionIndex].type === "mcq") {
      questionScores +=
        questions[currentQuestionIndex].answersToPoints[input[0]];
    } else {
      questionScores += questions[currentQuestionIndex].answersToPoints[input];
    }
    console.log(currentQuestionIndex);

    if (currentQuestionIndex === questions.length - 1) {
      setQuestionsEnded(true);
    } else {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  return (
    <motion.div
      animate={questionsEnded ? "questionsEnded" : "questionsNotEnded"}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      variants={wrapperDivVariant}
      className="fixed h-screen w-screen z-[60] flex justify-center items-center"
    >
      <div
        className="absolute bg-black bg-opacity-50 w-full h-full"
        onClick={() => setShowModal(false)}
      />

      <motion.div
        className="w-3/4 lg:w-3/4 h-[50%] m-5 rounded-md p-5 bg-[#EBEBEB] relative z-[70] overflow-auto"
        variants={modalDivVariant}
      >
        <img
          src="closeButton.svg"
          className="absolute right-2 top-2 cursor-pointer w-[30px] md:w-[40px] aspect-square"
          onClick={() => setShowModal(false)}
        />
        {questionsEnded ? (
          <Results result={questionScores}></Results>
        ) : (
          <>
            {currentQuestionIndex < 0 ? (
              <div className="w-full h-full md:h-3/4">
                <div className="text-center">
                  <div className="font-bold text-xl md:text-4xl">
                    Mental well-being self-assessment
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 grid-rows-[25%_75%] md:grid-cols-[25%_75%] md:grid-rows-1 place-items-center">
                  <div className="w-full flex justify-center items-center mt-12 sm:mt-0 sm:mb-0">
                    <img
                      src="questionnaireIcon.png"
                      className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mb-5"
                    />
                  </div>
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="text-base md:text-lg p-3 md:p-8">
                      <p>
                        Our mental well-being is important because it affects
                        how we handle stress and tackle the different demands in
                        our lives. Having a positive mindset and being resilient
                        can directly affect our overall well-being.
                      </p>
                      <br />
                      <p className="font-bold">
                        Please note this is a self-assessment and not a medical
                        diagnosis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="p-2 px-10 mb-3 text-lg text-black rounded-full bg-[#C6DAF9] font-semibold"
                    onClick={() => setCurrentQuestionIndex(0)}
                  >
                    Start!
                  </button>
                </div>
              </div>
            ) : (
              <>
                {questions[currentQuestionIndex].type === "range" ? (
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
                {/* <button
                  className="py-2 px-5 bg-gray-200 rounded-full absolute top-2 left-2"
                  onClick={() => {
                    setCurrentQuestionIndex((c) => c - 1);
                  }}
                >
                  Back
                </button> */}
              </>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
