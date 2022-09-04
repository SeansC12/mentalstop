import Router from "next/router";
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
import { motion } from "framer-motion";
import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { getLineOfBestFit, getBestFit } from "../../../utils/LinearRegression";

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
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export default function Results() {
  const [emotionsLogs, setEmotionsLogs] = useState(null);
  let lineOfBestFitCoordinates = [];

  let parsedEmotionsLog = null;
  const date = new Date();
  const newLog = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    score: Router.query.results * 5 + 5,
    text: "test",
  };
  useEffect(() => {
    const emotionsLog = localStorage.getItem("emotionsLog");

    if (emotionsLog) {
      parsedEmotionsLog = JSON.parse(emotionsLog);

      // get line of best fit
      let param = [];
      for (let i = 0; i < parsedEmotionsLog.length; i++) {
        param.push([parsedEmotionsLog[i].date, parsedEmotionsLog[i].score]);
      }
      lineOfBestFitCoordinates = getLineOfBestFit(param);
      if (
        parsedEmotionsLog.at(-1).date == newLog.date &&
        parsedEmotionsLog.at(-1).month == newLog.month &&
        parsedEmotionsLog.at(-1).year == newLog.year
      ) {
        if (
          confirm(
            "We have detected that you already wrote in your diary today\nWould you like to update it?"
          ) === true
        ) {
          parsedEmotionsLog.pop();
          parsedEmotionsLog.push(newLog);
        }
      } else {
        parsedEmotionsLog = [...parsedEmotionsLog, newLog];
      }
    } else {
      parsedEmotionsLog = [newLog];
    }
    localStorage.setItem("emotionsLog", JSON.stringify(parsedEmotionsLog));

    // const labels = parsedEmotionsLog.map((log) => `${log.date}`);
    let lineOfBestFitDataset = [];
    let scoreDataset = [];

    for (let i = 0; i < parsedEmotionsLog.length; i++) {
      scoreDataset.push({
        x: `${parsedEmotionsLog[i].date} ${month[parsedEmotionsLog[i].month]}`,
        y: parsedEmotionsLog[i].score,
      });
      lineOfBestFitDataset.push({
        x: `${parsedEmotionsLog[i].date} ${month[parsedEmotionsLog[i].month]}`,
        y: lineOfBestFitCoordinates[i][1],
      });
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

    setEmotionsLogs(data);
  }, []);

  return (
    <div>
      <Header tab="Get Help" />
      <main className="text-center">
        <div className="p-10">
          <div className="">
            <p className="font-bold text-2xl">Today's results: </p>
            <p>
              Results: {Math.round((Router.query.results * 5 + 5) * 100) / 100}{" "}
              / 10
            </p>
          </div>
          <div className="my-10 w-[100%] h-0.5 bg-[#aae99a]"></div>
          <div>
            <p className="font-bold text-2xl pb-10">Past Entries</p>
            {emotionsLogs && <Line data={emotionsLogs} />}
          </div>
        </div>
      </main>
    </div>
  );
}
