import Router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header/Header";
import useMetaKey from "../../../hooks/useMetaKey";

export default function Diary() {
  const [diaryText, setDiaryText] = useState("");
  const [diaryEvaluation, setDiaryEvaluation] = useState(null);
  const [showPrivacyInfo, setShowPrivacyInfo] = useState(false);
  const [showError, setShowError] = useState("");
  const inputRef = useRef();
  const router = useRouter();

  let buttonRef = useRef();

  useMetaKey(() => {
    buttonRef.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      })
    );
  }, inputRef);

  const analyse = () => {
    console.log("analysing");
    setShowError("");
    setDiaryText(null);
    setDiaryEvaluation(null);
    const url =
      "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1";

    const apiParams = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "00b3000128mshefea4c98308e802p13efd7jsnb129a7ffac9c",
        "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
      },
      body: `{"language":"english","text":"${diaryText}"}`,
    };

    fetch(url, apiParams)
      .then((res) => res.json())
      .then(
        (json) => {
          console.log("hi");
          setDiaryEvaluation(json);
          setShowError("");
          router.push(
            `/GetHelp/Diary/Results?results=${json.aggregate_sentiment.compound}`,
            `/GetHelp/Diary`,
            { shallow: true }
          );
        },
        () => console.log("failed 2")
      )
      .catch((err) => {
        // console.log("it fialed");
        setErrorInEval({
          error: true,
          description: err,
        });
      });
  };

  // const feedbackToEmotion = (e) => {
  //   if (e == null) {
  //     return "";
  //   } else if (e < -0.5) {
  //     return "Looks like your day wasn't great, but that's ok. We all have bad days :)";
  //   } else if (e < 0) {
  //     return "a bit bad";
  //   } else if (e < 0.5) {
  //     return "a bit good";
  //   } else if (e < 1) {
  //     return "Seems like you've had a great day";
  //   }
  // };

  return (
    <div>
      <Header tab="Get Help" />
      <main className="bg-[#fff] p-10">
        <div className="flex flex-row items-start justify-start w-full h-full">
          <p className="text-4xl font-medium font-Inter text-green-700 w-max">
            In less than a hundred words,
          </p>
          <p className="text-4xl font-Inter grow ml-2 w-max">
            write about how your day went.
          </p>
        </div>
        <textarea
          className="w-[100%] h-[50vh] p-5 border-none outline-none bg-[#CAEAC2] mt-4 rounded-xl"
          onChange={(e) => setDiaryText(e.target.value)}
          placeholder="Start writing here..."
          ref={inputRef}
        />
        <button
          className="bg-[#DED4D4] w-36 h-10 rounded-full m-auto"
          onClick={() => {
            diaryText === null
              ? setShowError("Evaluating, please wait")
              : diaryText === ""
              ? setShowError("Please key in your thoughts first")
              : analyse();
          }}
          style={{
            backgroundColor:
              diaryText === null || diaryText === "" ? "#DED4D4" : "#CAEAC2",
          }}
          ref={buttonRef}
        >
          {diaryText === null ? "Evaluating..." : "Evaluate"}
        </button>
        {showError !== "" && <div>{showError}</div>}
        <div>
          <p
            className="text-xl font-lora underline w-fit"
            onMouseEnter={() => setShowPrivacyInfo(true)}
            onMouseLeave={() => setShowPrivacyInfo(false)}
          >
            Where is my data stored?
          </p>
          {showPrivacyInfo && (
            <p>
              We store everything about you in your device itself, no one else
              has access to it
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
