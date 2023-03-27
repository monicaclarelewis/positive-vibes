import React from 'react'
import "../styles/Main.css"
import Jokes from './Jokes'
import { Card } from "@material-tailwind/react";

function Main() {
  return (
    <div className="happyPlace">
        <div className="flex flex-col md:flex-row">
          <Card>{<Jokes />}</Card>

          <Card>ADD API HERE</Card>
          
          <Card>ADD API HERE</Card>
        </div>
    </div>
  )
}

export default Main