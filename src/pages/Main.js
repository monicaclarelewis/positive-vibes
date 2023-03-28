import React from 'react'
import "../styles/Main.css"
import Jokes from './Jokes'
import InspirationalQuotes from '../components/QuoteCard';
import { Card } from "@material-tailwind/react";

function Main() {
  return (
    <div className="happyPlace">
        <div class="flex flex-col md:flex-row">
          <Card>{<Jokes />}</Card>

          <Card>{<InspirationalQuotes />}</Card>
          
          <Card>ADD API HERE</Card>
        </div>
    </div>
  )
}

export default Main