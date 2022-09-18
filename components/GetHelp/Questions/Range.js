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
    <div className="text-center w-full h-full">
      {/* <strong className="text-2xl md:text-4xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </strong>
      <p className="text-xl md:text-3xl p-5">{question.question}</p>
      <p>{question.subtext}</p> */}
      <p className="text-xl md:text-2xl text-left">
        <strong className="text-2xl md:text-4xl">
          Question {currentQuestionIndex + 1}
        </strong>{" "}
        of {questions.length}
      </p>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <p className="text-xl text-center md:text-3xl p-5">
          {question.question}
        </p>
        <p>{question.subtext}</p>
        <div className="w-full">
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
                defaultValue={5.5}
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
        </div>
      </div>
      <div className="flex justify-center absolute bottom-5 w-[calc(100%-40px)]">
        <button
          className="p-3 px-7 text-xl text-black rounded-full bg-[#C6DAF9] font-semibold"
          onClick={() => {
            handleSubmit(input);
          }}
        >
          Start!
        </button>
      </div>
    </div>
  );
}
