import "../CSS/normalize.css";
import "../CSS/style_1.css"
import "../CSS/style_about.css"
import React from "react";

function index() {
    document.title = "Новости"; //header я сперла у Лехи (надеюсь я не все сломала) 0_0
  return (
    <div className="about_us">
      <header className="header">
        <a href="/main" className="header-logo">
          <img src="img/LOGO.svg" className="logo" alt="Logo" /> //лого
        </a>
        <ul className="header-menu"> //навигация и вход
          <a href="index.html"> //нужно заменить маршрутизацию после появления компонента главной страницы
            <div className="button">Новости</div>
          </a>
          <div className="button">База подкастов</div>
          <a href="./AboutUs.jsx"> //необходимо заменить маршрутизацию
            <div className="button">О проекте</div>
          </a>
          <a href="lk.html"> //необходимо заменить маршрутизацию
            <div className="button_lk">Вход</div>
          </a>
        </ul>
      </header>
  
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
  
  export default index;