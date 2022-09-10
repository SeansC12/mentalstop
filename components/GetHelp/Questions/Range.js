import React from "react";
import questions from "../../../public/questions.json";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function Range({
  question,
  currentQuestionIndex,
  handleSubmit,
}) {
  let input = 5;
  return (
    <div className="text-center">
      <strong className="text-4xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </strong>
      <p className="text-3xl p-5">{question.question}</p>
      <p>{question.subtext}</p>
      {useWindowDimensions().width > 640 ? (
        <div className="text-3xl p-10">
          <p className="flex justify-center text-justify w-full">
            <p className="mr-auto">1</p>
            <p className="mx-auto">2</p>
            <p className="mx-auto">3</p>
            <p className="mx-auto">4</p>
            <p className="mx-auto">5</p>
            <p className="mx-auto">6</p>
            <p className="mx-auto">7</p>
            <p className="mx-auto">8</p>
            <p className="mx-auto">9</p>
            <p className="ml-auto">10</p>
          </p>
          <input
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-500 mx-4"
            type="range"
            onChange={(val) => {
              input = Math.round(val.target.value);
            }}
            min={1}
            max={10}
            step={0.1}
            defaultValue={input}
          ></input>
        </div>
      ) : (
        <div className="text-3xl p-10 flex items-center">
          <p>1</p>
          <input
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-500 mx-4"
            type="range"
            onChange={(val) => {
              input = Math.round(val.target.value);
            }}
            min={1}
            max={10}
            step={0.1}
            defaultValue={5.5}
          ></input>
          <p>10</p>
        </div>
      )}
      <div className="w-full flex justify-center">
        <button
          className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white"
          onClick={() => {
            handleSubmit(input);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
