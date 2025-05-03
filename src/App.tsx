import "./App.css";
import React from "react";
import Portfolio from "./portfolio";
import ScrollToTopButton from "./scrolltotopbutton";

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <h2>
            <a href="#">👾MSMMX WORLD👾</a>
          </h2>
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <button id="darkModeToggle">🌙 다크모드</button>
        </header>

        <main>
          <Portfolio />
          <ScrollToTopButton />
        </main>
      </div>
    </>
  );
}

export default App;
