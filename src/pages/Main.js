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
      <div >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-amber-200 m-3 p-2">{<Jokes />}</Card>
          <Card className="bg-amber-200 m-3 p-2">{<InspirationalQuotes />}</Card>
          <Card className="bg-amber-200 m-3 p-2">{<News />}</Card>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <h2 className="text-5xl mb-3 text-black">Contact Us</h2>
          <p className="text-black">Kickstart your career in BioPharma with the Mendeleev Institute right now</p>
          <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Learn More</button>
        </div>
     
        <div>
          <Party />
        </div>
      
      </div>
    </div>
  )
}

export default Main


