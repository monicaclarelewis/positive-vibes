import React from 'react'
import "../styles/Main.css"
import "../index.css"
import Jokes from './Jokes'
import InspirationalQuotes from '../components/QuoteCard';
import { Card } from "@material-tailwind/react";
import { ReactFloatingBalloons } from 'react-floating-balloons';

function Main() {
  return (
    <div className="happyPlace">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-amber-200 m-3 p-2">{<Jokes />}</Card>

          <Card className="bg-amber-200 m-3 p-2">{<InspirationalQuotes />}</Card>
          
          <Card className="bg-amber-200 m-3 p-2">ADD API HERE</Card>

          <ReactFloatingBalloons
            count={10}
            msgText="Happy!"
            colors={['red', 'white', 'blue']}
            popVolumeLevel={0.1}
          />
        </div>
    </div>
  )
}

export default Main