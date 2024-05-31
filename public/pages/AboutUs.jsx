import "../CSS/normalize.css";
import "../CSS/style_1.css"
import "../CSS/style_about.css"
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function AboutUs() {
  document.title = "О проекте";
  return (
    <div className="about_us">
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

      <body className="body">
        <div className="divider"></div>
        <img className="background" src="img/background1.svg" />
        <img className="background2" src="img/background2.svg" />
        <img className="background3" src="img/background3.svg" />
        <img className="background4" src="img/background4.svg" />
        <img className="background5" src="img/background5.svg" />
        <div className="label">
                <div className="WHO-ARE-WE">WHO<br />ARE<br />WE</div>
            </div>
                <p className="PODCAST-BASEMENT">
                    <span className="text-wrapper">Проект</span>
                    <span className="span"> PODCAST BASEMENT </span>
                    <span className="text-wrapper">создан студентами из РТУ МИРЭА</span>
                    <span className="text-wrapper-2">&nbsp;</span>
                </p>
            <div className="overlap">
                <div className="text-wrapper-3">OUR TEAM</div>
                <div className="team">Trunin Kirill<br />Konstantinov Arseniy<br />Yushkin Ilya</div>
                <div className="team-2">Kretova Aleksandra<br />Kolchev Alexey<br />Tovmasyan Grigoriy</div>
            </div>
            <div className="overlap-2">
                <div className="TECHNOLOGIES">TECHNOLOGIES</div>
                <div className="JAVASCRIPT-CSS">JAVASCRIPT HTML5 CSS<br />C#<br />Figma</div>
            </div>
            <div className="overlap-3">
                <div className="text-wrapper-4">CONTACT US</div>
                <a href="#"><div className="tg">
                    <div className="change-tg">
                        <img src="img/tg.svg" alt="" />
                    </div>
                    <div className="change-tg">
                        <img src="img/TGpast.svg" alt="" />
                    </div>
                </div></a>
                <a href="#"><div className="vk">
                    <div className="change-vk">
                        <img src="img/vk.svg" alt="" />
                    </div>
                    <div className="change-vk">
                        <img src="img/VKpast.svg" alt="" />
                    </div>
                </div></a>
                <a href="#"><div className="wh">
                    <div className="change-wh">
                        <img src="img/whatsapp.svg" alt="" />
                    </div>
                    <div className="change-wh">
                        <img src="img/WHpast.svg" alt="" />
                    </div>
                </div></a>
            </div>
      </body>

      <footer className="footer">
        <div className="divider"></div>
        <div className="view-2">
          <div className="component-1"><div className="button">техподдержка</div></div>
          <div className="text-wrapper-7">Podcast Basement</div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;