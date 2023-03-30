import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (

    
    <nav className="shadow-md w-full position:fixed top-0 left-0 bg-amber-200 navBar">
      <div className="md:flex items-center justify-between bg-amber-200 py-3 md:px-8 px-6">
        <div className="font-bold text-2xl cursor-grab flex items-center font-[Poppins]">
          <a href="/main" className="text-3xl mr-1 pt-2">
            <ion-icon name="happy-outline"></ion-icon>
          </a>
        </div>
        <ul className="md:flex md:items-center md:static md:z-auto md:w-auto ">
          <Link className="text-3xl navLink" to="/"> <ion-icon name="home-outline"></ion-icon> </Link>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar