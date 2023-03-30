import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="shadow-md w-full position:fixed top-0 left-0 bg-amber-200 footer">
        <div className="flex items-center justify-center text-2xl bg-amber-200 py-4 px-9 px-7">
                <ion-icon name="flower-outline"></ion-icon>
                <ion-icon name="ice-cream-outline"></ion-icon>
                <ion-icon name="happy-outline"></ion-icon>
                <ion-icon name="pizza-outline"></ion-icon>
                <ion-icon name="sunny-outline"></ion-icon>
        </div>
    </footer>
  )
}

export default Footer 