import React, { useState } from "react";
import Header from "../components/Header/Header";

export default function Diary() {
  const [diaryText, setDiaryText] = useState("");
  const [diaryEvaluation, setDiaryEvaluation] = useState(null)
  const [errorInEval, setErrorInEval] = useState(false)

  const analyse = (text) => {
    setDiaryText(null);
    setDiaryEvaluation(null)
    const url =
      "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1";

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "00b3000128mshefea4c98308e802p13efd7jsnb129a7ffac9c",
        "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
      },
      body: `{"language":"english","text":"${diaryText}"}`,
    };
    const thing = {
      "app_version": "v1.0-17660c86",
      "time_taken": 0.0031015872955322266,
      "msg": "Sentiment Analysis successful",
      "ok": true,
      "aggregate_sentiment": {
          "neg": 0,
          "neu": 0.215,
          "pos": 0.785,
          "compound": 0.8074
      },
      "sentiment_list": [
          {
              "neg": 0,
              "neu": 0.215,
              "pos": 0.785,
              "compound": 0.8074,
              "sentence": "i love my life, woo"
          }
      ],
      "sentiment": "positive"
  }

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDiaryText("")
        setDiaryEvaluation(json)
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <div>
      <Header tab="Get Help" />
      <div className="bg-[#fff] p-10">
        <div>
          <p className="text-4xl font-lora">Write about how your day went</p>
          <p className="text-2xl font-lora mt-3">
            Studies have shown that writing down your feelings and thoughts can
            help you improve your mental health
          </p>
          <p className="text-2xl font-lora">
            And don't worry, everything you say is stored in your device itself
          </p>
        </div>
        <textarea
          className="w-[100%] border-black border-2"
          onChange={(e) => {
            setDiaryText(e.target.value);
          }}
        />
        <button
          className="bg-[#DED4D4] w-36 h-10 rounded-full"
          onClick={() => analyse()}
          style={{ backgroundColor: diaryText == null ? "#DED4D4" : "#CAEAC2" }}
          disabled={diaryText == "" || diaryText == null}
        >
          {diaryText == null ? "Evaluating..." : "Evaluate"}
        </button>
        <p>{diaryEvaluation != null && diaryEvaluation.aggregate_sentiment.compound}</p>
      </div>
    </div>
  );
}
