import Router from 'next/router'
import React from 'react'
import Header from "../../../components/Header/Header"

export default function Results() {
  return (
    <div>
      <Header tab="Get Help" />
      <div>
        {Router.query.result}
      </div>
    </div>
  )
}
