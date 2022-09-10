import React, { useState } from "react";
import questions from "../../../public/questions.json";

const buttonColours = ["pink", "blue", "yellow", "green"];

export default function Mcq({ question, currentQuestionIndex, handleSubmit }) {
  const [mcqInput, setMcqInput] = useState([null]);
  return (
    <div className="text-center h-full">
      <strong className="text-2xl md:text-4xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </strong>
      <p className="text-xl md:text-3xl p-5">{question.question}</p>
      <p>{question.subtext}</p>
      <div className="grid grid-cols-2 gap-5 h-1/2">
        {Object.entries(question.answersToPoints).map((answer, i) => (
          <button
            key={answer}
            onClick={() => {
              setMcqInput(answer);
            }}
            className="h-full rounded-xl"
            style={{
              backgroundColor: buttonColours[i],
              boxShadow:
                mcqInput[0] === answer[0]
                  ? "1px 1px 1px 1px"
                  : "5px 5px 5px 5px",
            }}
          >
            <p>{answer}</p>
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button
          disabled={mcqInput[0] == null}
          className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white"
          onClick={() => {
            handleSubmit(mcqInput);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
