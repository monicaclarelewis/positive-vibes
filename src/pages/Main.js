import React from 'react'
import "../styles/Main.css"
import Jokes from './Jokes'
import InspirationalQuotes from '../components/QuoteCard';
import { Card } from "@material-tailwind/react";

function Main() {
  return (
    <div className="happyPlace">
        <div class="grid grid-cols-3 gap-4">
          <Card class="bg-amber-200">{<Jokes />}</Card>

          <Card class="bg-amber-200">{<InspirationalQuotes />}</Card>
          
          <Card class="bg-amber-200">ADD API HERE</Card>
        </div>
    </div>
  )
}

export default Main