import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgProfile from "./res/imgcv.jpg";
import imgfb from "./res/fblogo.png";
import imgTwitter from "./res/twitterlogo.png";

function App() {
  return (
    <div className="App">
      <header>
            <nav>
                <div class="containernav">
                    <div>
                        <a href="index.html" class="nav-color">HOME</a>
                    </div>
                    <div>
                        <ul class="navlist">
                            <li class="navitems"><a href="about.html" class="nav-color">ABOUT</a></li>
                            <li class="navitems"><a href="experience.html" class="nav-color">EXPERIENCE</a></li>
                            <li class="navitems"><a href="contact.html" class="nav-color">CONTACT</a></li>
                        </ul>
                    </div>
                </div>              
            </nav>
        </header>
        

        <main class="main-index">
           <img src={imgProfile} alt="Photo de Hamza Ben Manâa"/>
            <h1>Hamza Ben Manâa</h1>
            <h3>FUTURE WEB DEVELOPER</h3>
            <button class="hire-button">
                <a href="contact.html">Hire me</a>
            </button>
           <button>
               <a href="res/CV.pdf" target="_blank">Download CV</a>
           </button>
        </main>

        <footer>
            <a href="https://www.facebook.com/hamza.bn.manaa" target="_blank"><img src={imgfb} alt="Facebook" class="img-fb-custom" /></a>
            <a href="https://twitter.com/hamzabenmanaa" target="_blank"><img src={imgTwitter} alt="Twitter" class="img-twitter-customr"/></a>
            <p>© All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;
