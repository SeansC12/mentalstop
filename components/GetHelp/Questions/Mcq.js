import React from "react";
import questions from "../../../public/questions.json";

const buttonColours = ["#FFA4A4", "#FFF590", "#90ED88", "#B4D1FF"];

export default function Mcq({ question, currentQuestionIndex, handleSubmit }) {
  return (
    <div className="h-full flex flex-col">
      <p className="text-xl md:text-2xl">
        <strong className="text-2xl md:text-4xl">
          Question {currentQuestionIndex + 1}
        </strong>{" "}
        of {questions.length}
      </p>

      <p className="text-xl text-center md:text-3xl p-5">{question.question}</p>
      <p>{question.subtext}</p>

      <div className="flex-grow"></div>
      <div className="grid grid-cols-2 gap-2 md:h-1/2 md:gap-5 -p-2 md:p-5">
        {Object.entries(question.answersToPoints).map((answer, i) => (
          <button
            key={answer}
            onClick={() => {
              handleSubmit(answer);
            }}
            className="h-full rounded-xl shadow-md py-5"
            style={{
              backgroundColor: buttonColours[i],
            }}
          >
            <p>{answer[0]}</p>
          </button>
        ))}
      </div>

      {/* <div className="w-full flex justify-center">
        <button
          disabled={mcqInput[0] == null}
          className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white"
          onClick={() => {
            handleSubmit(mcqInput);
          }}
        >
          Submit
        </button>
      </div> */}
    </div>
  );
}
