import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
        <Link to="/"> Home </Link>
        <Link to="/Main"> Make me happy! </Link>
        <Link to="/jokes">Chuck Norris Banter</Link>
        <Link to="/quotes">Inspirational Quotes</Link>
        <Link to="News">Positive-News</Link>
    </div> 
  )
}

export default Navbar