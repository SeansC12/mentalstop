import { Router } from "next/router";
import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import questions from "../../../public/questions.json";
// import { SliderWhite } from "../../components/GetHelp/Slider";

let questionScores = 0;
export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mcqInput, setMcqInput] = useState(null);
  let input = 5;

  const handleSubmit = () => {
    // questionScores +=
    //   questions[currentQuestionIndex].answersToPoints[input] ||
    //   questions[currentQuestionIndex].answersToPoints[mcqInput]
    if (questions[currentQuestionIndex].type == "mcq") {
      questionScores += questions[currentQuestionIndex].answersToPoints[mcqInput]
    } else {
      questionScores += questions[currentQuestionIndex].answersToPoints[input]
    }
    console.log(questionScores);
    if (currentQuestionIndex === questions.length - 1) {
      Router.push("/GetHelp/Questions/Results")
    } else {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  return (
    <div>
      {/* <Header tab="Get Help" /> */}
      <main>
        <div className="flex">
          <div className="">
            <p>{questions[currentQuestionIndex].question}</p>
            <p>{questions[currentQuestionIndex].subtext}</p>
            {questions[currentQuestionIndex].type === "range" ? (
              <input
                type="range"
                onChange={(val) => {
                  input = val.target.value
                }}
                min={1}
                max={10}
              ></input>
            ) : (
              Object.entries(
                questions[currentQuestionIndex].answersToPoints
              ).map((answer) => (
                <button
                  onClick={() => {
                    setMcqInput(answer[0]);
                  }}
                  style={{
                    backgroundColor: mcqInput === answer[0] ? "blue" : "white",
                  }}
                >
                  {answer}
                </button>
              ))
            )}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
}
