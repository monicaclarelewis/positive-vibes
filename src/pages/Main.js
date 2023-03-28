import React from 'react'
import "../styles/Main.css"
import "../index.css"
import Jokes from './Jokes'
import InspirationalQuotes from '../components/QuoteCard';
import { Card } from "@material-tailwind/react";

function Main() {
  return (
    <div className="happyPlace">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-amber-200 m-5">{<Jokes />}</Card>

          <Card className="bg-amber-200 m-5">{<InspirationalQuotes />}</Card>
          
          <Card className="bg-amber-200 m-5">ADD API HERE</Card>
        </div>
    </div>
  )
}

export default Main