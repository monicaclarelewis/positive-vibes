import React from 'react'
import "../styles/Main.css"
import Jokes from './Jokes'

function Main() {
  return (
    <div className="happyPlace">
        <div class="flex flex-col md:flex-row">
          <div>{<Jokes />}</div>

          <div>ADD API HERE</div>
          
          <div>ADD API HERE</div>
        </div>
    </div>
  )
}

export default Main