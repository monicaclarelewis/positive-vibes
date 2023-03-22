import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
        <Link to="/"> Home </Link>
        <Link to="/Main"> Make me happy! </Link>
    </div>
  )
}

export default Navbar