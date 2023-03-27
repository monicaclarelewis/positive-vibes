import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (

    
    <nav className="shadow-md w-full position:fixed top-0 left-0 bg-amber-200 navBar">
      <div className="md:flex items-center justify-between bg-amber-200 py-3 md:px-8 px-6">
        <div className="font-bold text-2xl cursor-grab flex items-center font-[Poppins]">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="happy-outline"></ion-icon>
          </span>
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 md:static md:z-auto md:w-auto md:pl-0 pl-9">
          <Link className="md:ml-8 text-xl navLink" to="/"> Home </Link>
          <Link className="md:ml-8 text-xl navLink" to="/Main"> Make me happy! </Link>
          <Link className="md:ml-8 text-xl navLink" to="/quotes">Inspirational Quotes</Link>
          <Link className="md:ml-8 text-xl navLink" to="/news">Positive-News</Link>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar