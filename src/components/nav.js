import * as React from "react"

const Header = ()=>{

return (
  <nav>
    <div className="logo">
      <a href="./index.html">
        {" "}
        <h4>Péter Tauber</h4>
      </a>
    </div>
    <ul className="nav-links">
      <li>
        <a href="./about">About</a>
      </li>
      <li>
        <a href="./prints">Prints</a>
      </li>
      <li>
        <a href="./paintings" className="active">
          Paintings
        </a>
      </li>
      <li>
        <a href="./sculptures">Sculptures</a>
      </li>
      <li>
        <a href="http://rostbrand.com" target="_blank" rel="noreferrer">
          Design
        </a>
      </li>
      <li>
        <a href="./contact">Contact</a>
      </li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
);}

export default Header
