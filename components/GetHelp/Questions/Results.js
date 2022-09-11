import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function Results({ result }) {
  const [questionsLogs, setQuestionsLogs] = useState(null);

  let parsedQuestionsLog = null;
  const date = new Date();
  const newLog = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    score: result,
  };
  useEffect(() => {
    const questionsLog = localStorage.getItem("questionsLog");
    if (questionsLog) {
      parsedQuestionsLog = JSON.parse(questionsLog);
      if (
        parsedQuestionsLog.at(-1).date == newLog.date &&
        parsedQuestionsLog.at(-1).month == newLog.month &&
        parsedQuestionsLog.at(-1).year == newLog.year
      ) {
        if (
          confirm(
            "We have detected that you already wrote in your diary today\nWould you like to update it?"
          ) == true
        ) {
          parsedQuestionsLog.pop();
          parsedQuestionsLog.push(newLog);
        }
      } else {
        parsedQuestionsLog = [...parsedQuestionsLog, newLog];
      }
    } else {
      parsedQuestionsLog = [newLog];
    }
    localStorage.setItem("questionsLog", JSON.stringify(parsedQuestionsLog));

    const labels = parsedQuestionsLog.map((log) => `${log.date}`);
    const data = {
      labels,
      datasets: [
        {
          label: "Daily",
          data: parsedQuestionsLog.map((questionLog) => questionLog.score),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };

    setQuestionsLogs(data);
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="font-bold text-xl md:text-2xl pb-5">
          Your result: {result}
        </p>
        <div>
          {questionsLogs && <Line className="h-full" data={questionsLogs} />}
        </div>
      </div>
    </div>
  );
}
