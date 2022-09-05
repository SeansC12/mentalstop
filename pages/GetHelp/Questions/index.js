import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import questions from "../../../public/questions.json";

let questionScores = 0;
export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mcqInput, setMcqInput] = useState([null]);
  let input = 5;
  const router = useRouter();

  const handleSubmit = () => {
    questionScores +=
      questions[currentQuestionIndex].answersToPoints[input] ||
      questions[currentQuestionIndex].answersToPoints[mcqInput] ||
      0;

    if (currentQuestionIndex == questions.length - 1) {
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
    <div>
      <Header tab="Get Help" />
      <main className="p-10 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB] h-screen">
        <div className="h-screen">
          <p className="text-4xl">Answer a few questions to determine if you may be at risk of mental health issues</p>
        </div>
        <div className="">
          <p className="font-bold text-4xl ">
            {questions[currentQuestionIndex].question}
          </p>
          <p>{questions[currentQuestionIndex].subtext}</p>
          {questions[currentQuestionIndex].type === "range" ? (
            <div className="flex flex-col text-3xl p-10">
              <div className="grid grid-cols-11 text-center w-full">
                <p className="ml-0">0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
              </div>
              {/* <p className="pr-10">0</p> */}
              <input
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-500"
                type="range"
                onChange={(val) => {
                  input = Math.round(val.target.value);
                }}
                min={1}
                max={10}
                step={0.1}
              ></input>
              {/* <p className="pl-10">10</p> */}
            </div>
          ) : (
            Object.entries(questions[currentQuestionIndex].answersToPoints).map(
              (answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setMcqInput(answer);
                    console.log(mcqInput);
                    console.log(answer);
                    console.log(mcqInput == answer);
                  }}
                  style={{
                    backgroundColor:
                      mcqInput[0] == answer[0] ? "blue" : "white",
                  }}
                >
                  {answer}
                </button>
              )
            )
          )}
          <button
            className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}

// .btn-grad {
//   background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
