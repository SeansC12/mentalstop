import React, { useEffect, useState } from "react";
import questions from "../../../public/questions.json";
import { motion } from "framer-motion";
import "../../../public/closeButton.svg";
import { useRouter } from "next/router";
import Mcq from "./Mcq";
import Range from "./Range";

let questionScores = 0;
export default function QuestionModal({ setShowModal }) {
  useEffect(() => {
    // needed as user leaving qns and coming back will not reset prev score
    questionScores = 0;
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questionsEnded, setQuestionsEnded] = useState(false);
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
      // router.push(
      //   `/GetHelp/Questions/Results?result=${questionScores}`,
      //   "/GetHelp/Questions",
      //   { shallow: true }
      // );
      setQuestionsEnded(true);
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

      <div className="w-3/4 lg:w-1/2 h-2/3 m-5 rounded-md p-5 bg-gradient-to-r from-[#C6DAF9] to-[#DFFFDC] z-50 relative">
        <img
          src="closeButton.svg"
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setShowModal(false)}
        />
        {questionsEnded ? (
          <div>
            <p>Your Score: {questionScores}</p>
            <p>Your score shows that:</p>
          </div>
        ) : (
          <>
            {currentQuestionIndex < 0 ? (
              <div className="text-center">
                <strong className="text-2xl md:text-4xl">
                  Mental well-being self assesment
                </strong>
                <p className="text-lg md:text-xl p-5 md:p-10 overflow-scroll">
                  Answer a few questions to determine if you may be at risk of
                  mental health issues
                  <br />
                  Note that this <strong>isn't a professional diagnosis</strong>
                  , it should be used as a <strong>rough gauge</strong>
                </p>

                <button
                  className="p-3 px-7 text-xl text-white rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)]"
                  onClick={() => setCurrentQuestionIndex(0)}
                >
                  Start!
                </button>
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
      </div>
    </motion.div>
  );
}
