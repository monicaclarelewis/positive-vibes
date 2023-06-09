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
      <div>
      <Party />
      </div>
    </div>
  );
}

export default Main