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
import { getLineOfBestFit } from "../../../utils/LinearRegression"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const month = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export default function Results({ result }) {
  const [questionsLogs, setQuestionsLogs] = useState(null);

  let parsedQuestionsLog = [];
  let lineOfBestFitCoordinates = [];
  const date = new Date();
  const newLog = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    score: result,
  };

  useEffect(() => {
    const questionsLog = localStorage.getItem("questionsLog");
    console.log(questionsLog === true);

    if (questionsLog) {
      parsedQuestionsLog = JSON.parse(questionsLog);
      console.log(parsedQuestionsLog);
      console.log(parsedQuestionsLog.at(-1));

      // get line of best fit
      let param = [];
      for (let i = 0; i < parsedQuestionsLog.length; i++) {
        param.push([parsedQuestionsLog[i].date, parsedQuestionsLog[i].score]);
      }
      lineOfBestFitCoordinates = getLineOfBestFit(param);

      if (
        parsedQuestionsLog.at(-1).date == newLog.date &&
        parsedQuestionsLog.at(-1).month == newLog.month &&
        parsedQuestionsLog.at(-1).year == newLog.year
      ) {
        // console.log(parsedQuestionsLog.at(-1));
        if (
          confirm(
            "We have detected that you already recorded your mood with Inquire once today.\nWould you like to update it?"
          ) === true
          // false === true
        ) {
          parsedQuestionsLog.pop();
          parsedQuestionsLog.push(newLog);
        }
      } else {
        parsedQuestionsLog = [...parsedQuestionsLog, newLog];
      }
    } else {
      parsedQuestionsLog.push(newLog);
    }
    localStorage.setItem("questionsLog", JSON.stringify(parsedQuestionsLog));

    // const labels = parsedQuestionsLog.map((log) => `${log.date}`);
    let lineOfBestFitDataset = [];
    let scoreDataset = [];
    console.log(`${parsedQuestionsLog[0].month}`)
    console.log(new Date().getMonth())
    for (let i = 0; i < parsedQuestionsLog.length; i++) {
      scoreDataset.push({
        x: `${parsedQuestionsLog[i].date} ${month[parsedQuestionsLog[i].month]}`,
        y: parsedQuestionsLog[i].score,
      });
      try {
        lineOfBestFitDataset.push({
          x: `${parsedQuestionsLog[i].date} ${month[parsedQuestionsLog[i].month]
            }`,
          y: lineOfBestFitCoordinates[i][1],
        });
      } catch (err) {
        lineOfBestFitCoordinates.push({
          x: `${parsedQuestionsLog[i].date} ${month[parsedQuestionsLog[i].month]
            }`,
          y: parsedQuestionsLog[i].score,
        });
      }
    }

    const data = {
      type: "line",
      datasets: [
        {
          label: "Daily",
          data: scoreDataset,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Average",
          data: lineOfBestFitDataset,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
      options: {
        parsing: false,
      },
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
