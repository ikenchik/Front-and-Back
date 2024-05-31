import "../CSS/normalize.css";
import "../CSS/style_1.css"
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Index() {
    document.title = "Новости"; //header я сперла у Лехи (надеюсь я не все сломала) 0_0
  return (
    <div className="index">
      <header className="header">
        <Link to="/home" className="header-logo">
          <img src="img/LOGO.svg" className="logo" alt="Logo" /> //лого
        </Link>
        <ul className="header-menu"> //навигация и вход
          <Link to="/home" className="button">Новости</Link>
          <div className="button">База подкастов</div>
          <Link to="/aboutus" className="button">О проекте</Link>
          <Link to="/lk" className="button_lk">Вход</Link>
        </ul>
      </header>

      <Route path="/home" component={Index.jsx} />
      <Route path="/aboutus" component={AboutUs.jsx} />
      <Route path="/lk" component={lk.jsx} />
  
        <main className="body">
          <div className="divider"></div>
          <div className="news">Лента новостей</div>
          <div className="divider"></div>
  
          <div className="video-link">
            <a href="https://youtu.be/APL0WijUh0c?si=VmFOOGaMHD9LAX0I">
              <div className="video">
                <img src="img/image1.svg" />
              </div>
            </a>
            <div className="spacer"></div>
            <a href="https://youtu.be/w-UR_LDxegc?si=XwiSKqsSd0hVmnqg">
              <div className="video">
                <img src="img/image2.svg" />
              </div>
            </a>
          </div>
          <div className="video-link">
            <a href="https://youtu.be/zfoQCDBhBUs?si=irV7PVgEwAO7scYG">
              <div className="video">
                <img src="img/image3.svg" />
              </div>
            </a>
            <div className="spacer"></div>
            <a href="https://youtu.be/p4y-lqwOfwc?si=N3NRbT2rF-lThG35">
              <div className="video">
                <img src="img/image4.svg" />
              </div>
            </a>
          </div>
          <div className="video-link">
            <a href="https://youtu.be/JDkhLPKXD0U?si=kRDPtWl8bpsz0hW4">
              <div className="video">
                <img src="img/image5.svg" />
              </div>
            </a>
            <div className="spacer"></div>
            <a href="https://youtu.be/kWKqYVKnt9w?si=vXDnNCkotlX54j6o">
              <div className="video">
                <img src="img/image6.svg" />
              </div>
            </a>
          </div>
        </main>
      </div>
    );
  }
  
  export default Index;