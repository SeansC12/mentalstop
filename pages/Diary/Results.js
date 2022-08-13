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
import Header from "../../components/Header/Header";
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

export default function Results() {
  const [emotionsLogs, setEmotionsLogs] = useState(null);

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
      if (
        parsedEmotionsLog.at(-1).date == newLog.date &&
        parsedEmotionsLog.at(-1).month == newLog.month &&
        parsedEmotionsLog.at(-1).year == newLog.year
      ) {
        if (
          confirm(
            "We have detected that you already wrote in your diary today\nWould you like to update it?"
          ) == true
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

    const labels = parsedEmotionsLog.map((log) => `${log.date}`);
    const data = {
      labels,
      datasets: [
        {
          label: "Daily",
          data: parsedEmotionsLog.map((emotionLog) => emotionLog.score),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        // {
        //   label: 'Average',
        //   data: labels.map(() => Math.floor(Math.random() * 10)),
        //   borderColor: 'rgb(53, 162, 235)',
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
      ],
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
            <p>Results: {Router.query.results * 5 + 5}/10</p>
          </div>
          <div className="my-10 w-[100%] h-0.5 bg-[#aae99a]"></div>
          <div>
            <p className="font-bold text-2xl pb-10">Past Week</p>
            {emotionsLogs && <Line data={emotionsLogs} />}
          </div>
        </div>
      </main>
    </div>
  );
}
