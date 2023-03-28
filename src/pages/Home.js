import React from 'react'
import "../styles/Home.css"
 
 function Home() {
   return (
    <div className="home">
      <a href="/main">
        <button className="bg-amber-400 hover:bg-amber-500 font-bold py-2 px-4 rounded-full border border border-black cursor-grab happyBtn">
          MAKE ME HAPPY!
        </button>
      </a>

    </div>
   );
 }
 
 export default Home