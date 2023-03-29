import React from 'react'
import "../styles/Main.css"
import "../index.css"
import Jokes from './Jokes'
import InspirationalQuotes from '../components/QuoteCard';
import { Card } from "@material-tailwind/react";
import News from './News';
import Party from '../components/Confetti/Confetti';


function Main() {
  return (
    <div className="happyPlace">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-amber-200 m-3 p-2">{<Jokes />}</Card>
        <Card className="bg-amber-200 m-3 p-2">{<InspirationalQuotes />}</Card>
        <Card className="bg-amber-200 m-3 p-2">{<News />}</Card>
      </div>
      <a href="/main">
        <button className="bg-amber-400 hover:bg-amber-500 font-bold py-2 px-4 rounded-full border border border-black cursor-grab absolute inset-x-0 bottom-0 w-48 moreBtn">
          MORE HAPPINESS!
        </button>
      </a>
      <div>
      <Party />
      </div>
    </div>
  )
}

export default Main