// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import Header from "../../../components/Header/Header";
// import questions from "../../../public/questions.json";

// let questionScores = 0;
// export default function Questions() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [mcqInput, setMcqInput] = useState(null);
//   const router = useRouter();
//   let input = 5;
//   const handleSubmit = () => {
//     if (questions[currentQuestionIndex].type === "mcq") {
//       questionScores +=
//         questions[currentQuestionIndex].answersToPoints[mcqInput];
//     } else {
//       questionScores += questions[currentQuestionIndex].answersToPoints[input];
//     }
//     console.log(questionScores);
//     if (currentQuestionIndex === questions.length - 1) {
//       router.push(
//         `/GetHelp/Questions/Results?result=${questionScores}`,
//         "/GetHelp/Questions",
//         { shallow: true }
//       );
//     } else {
//       setCurrentQuestionIndex((i) => i + 1);
//     }
//   };

//   return (
//     <div>
//       <Header tab="Get Help" />
//       {currentQuestionIndex < 0 ? (
//         <main className="p-10 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB] h-screen text-center">
//           <strong className="text-4xl">Mental well-being self assesment</strong>
//           <p className="text-xl pt-10">
//             Answer a few questions to determine if you may be at risk of mental
//             health issues
//             <br />
//             Note that this isn't a professional diagnosis, it should be used as
//             a rough gauge as <strong>TEXT</strong>
//           </p>

//           <button
//             className="bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] p-3 px-7 text-xl text-white rounded-full"
//             onClick={() => setCurrentQuestionIndex(0)}
//           >
//             Start!
//           </button>
//         </main>
//       ) : (
//         <main className="p-10 md:p-16 bg-gradient-to-b flex justify-center from-[#DFFFDC] to-[#E5E5DB] h-screen">
//           <div className="px-10 text-center">
//             <strong className="text-4xl">
//               Question {currentQuestionIndex + 1} of {questions.length}
//             </strong>
//             <p className="text-3xl p-5">
//               {questions[currentQuestionIndex].question}
//             </p>
//             <p>{questions[currentQuestionIndex].subtext}</p>
//             {questions[currentQuestionIndex].type === "range" ? (
//               <div className="text-3xl p-10">
//                 <p className="flex justify-center text-justify w-full">
//                   <p className="mr-auto">1</p>
//                   <p className="mx-auto">2</p>
//                   <p className="mx-auto">3</p>
//                   <p className="mx-auto">4</p>
//                   <p className="mx-auto">5</p>
//                   <p className="mx-auto">6</p>
//                   <p className="mx-auto">7</p>
//                   <p className="mx-auto">8</p>
//                   <p className="mx-auto">9</p>
//                   <p className="ml-auto">10</p>
//                 </p>
//                 <input
//                   className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-500"
//                   type="range"
//                   onChange={(val) => {
//                     input = Math.round(val.target.value);
//                   }}
//                   min={1}
//                   max={10}
//                   step={0.1}
//                 ></input>
//                 {/* <p className="pl-10">10</p> */}
//               </div>
//             ) : (
//               Object.entries(
//                 questions[currentQuestionIndex].answersToPoints
//               ).map((answer) => (
//                 <button
//                   key={answer}
//                   onClick={() => {
//                     setMcqInput(answer);
//                   }}
//                   style={{
//                     backgroundColor:
//                       mcqInput[0] === answer[0] ? "blue" : "white",
//                   }}
//                 >
//                   {answer}
//                 </button>
//               ))
//             )}
//             <div className="w-full flex justify-center">
//               <button
//                 className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// }

import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import questions from "../../../public/questions.json";

let questionScores = 0;
export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [startQuiz, setStartQuiz] = useState(false);
  const [mcqInput, setMcqInput] = useState([null]);

  const router = useRouter();

  const handleSubmission = () => {};

  let answers = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  return (
    <div>
      <Header tab="Get Help" />
      {!startQuiz ? (
        <main className="p-10 md:p-16 h-screen text-center bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
          <strong className="text-4xl">Mental well-being self assesment</strong>
          <p className="text-xl pt-10">
            Answer a few questions to determine if you may be at risk of mental
            health issues
            <br />
            Note that this isn't a professional diagnosis, it should be used as
            a rough gauge as <strong>TEXT</strong>
          </p>
          <button
            className="bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] p-3 px-7 text-xl text-white rounded-full"
            onClick={() => setStartQuiz(true)}
          >
            Start!
          </button>
        </main>
      ) : (
        <main className="pt-10 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
          <p></p>
          {questions.map((question, i) =>
            question.type === "range" ? (
              <div className="p-5 md:p-16 my-5 md:m-10">
                <p className="md:text-xl">
                  <strong>{i + 1}.</strong> {question.question}
                </p>
                <p className="text-sm md:text-base mb-2 md:mb-5">{question.subtext}</p>
                <div className="flex gap-2 md:gap-5 items-center text-sm md:text-xl md:mx-10">
                  1
                  <input
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    type="range"
                    onChange={(val) => {
                      answers[i] = Math.round(val.target.value);
                    }}
                    defaultValue={0}
                    min={1}
                    max={10}
                    step={0.1}
                  />{" "}
                  10
                </div>
              </div>
            ) : (
              Object.entries(question.answersToPoints).map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setMcqInput(answer);
                  }}
                  style={{
                    backgroundColor:
                      mcqInput[0] === answer[0] ? "blue" : "white",
                  }}
                >
                  {answer}
                </button>
              ))
            )
          )}
          <div className="w-full flex justify-center">
            <button className="p-3 px-7 rounded-full bg-gradient-to-r from-[rgb(80,80,160)] to-[rgb(40,200,200)] text-xl text-white">
              Submit
            </button>
          </div>
        </main>
      )}
    </div>
  );
}
