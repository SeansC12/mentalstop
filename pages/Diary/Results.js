import Router, { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header/Header";

export default function Results() {
  const router = useRouter();
  return (
    <div>
      <Header tab="Diary"/>
      <main>Results: {Router.query.results * 5 + 5}/10</main>
    </div>
  );
}
