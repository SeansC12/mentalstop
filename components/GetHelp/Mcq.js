import React, { useState } from "react";
import questions from "../../public/questions.json";

export default function Mcq({ question, currentQuestionIndex, handleSubmit }) {
  const [mcqInput, setMcqInput] = useState([null]);
  return (
    <div className="text-center h-full">
      <strong className="text-4xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </strong>
      <p className="text-3xl p-5">{question.question}</p>
      <p>{question.subtext}</p>
      <div className="grid grid-cols-2 ">
        {Object.entries(question.answersToPoints).map((answer) => (
          <button
            key={answer}
            onClick={() => {
              setMcqInput(answer);
            }}
            className="h-full"
          >
            <div
              className="flex h-full items-center"
              style={{
                backgroundColor: mcqInput[0] === answer[0] ? "white" : "green",
              }}
            >
              <p>{answer}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button
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
