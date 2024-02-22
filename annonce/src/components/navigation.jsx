import { Link } from "react-router-dom";
import "../styles/navigation.css"
import React from "react";

export default function Navigation(){
  return (
    <>
      <nav>
        <div id="logo"><Link to="./">ABITO.MA</Link></div>

        <ul>
          {["Immobilier", "Electornique", "Automobile"].map((it, ind) => <li key={ind}><Link to={`./${it.toLowerCase()}`}>{it}</Link></li>)}
        </ul>

        <button>Se connecter &nbsp;<i className="fa-solid fa-arrow-right-to-bracket"></i></button>
      </nav>
      <form action="">
        <input type="text" placeholder="Que recherechez-vous?"/>
        <button><i class="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>RECHERCHER</button>
      </form>

      
    </>
  )
}