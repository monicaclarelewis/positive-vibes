import React from 'react'
import "../styles/Home.css"
 
 function Home() {
   return (
    <div className="home">
      <a href="/main">
        <button class="bg-cyan-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full happyBtn">
          MAKE ME HAPPY!
        </button>
      </a>

    </div>
   );
 }
 
 export default Home