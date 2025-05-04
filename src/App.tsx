import "./App.css";

import Portfolio from "./components/portfolio";
import ScrollToTopButton from "./components/scrolltotopbutton";
import IntroEditor from "./components/introeditor";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <h2>👾MSMMX WORLD👾</h2>

          <nav>
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#contact"> CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <About />
          <IntroEditor />
          <Portfolio />
          <Contact />
          <ScrollToTopButton />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
