import React from "react";
import "./HeaderMenu.scss";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <div className="container">
        <div className="header-menu__container">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <ul className="menu">
            <li>
              <a href="/#">ElcoreStore</a>
            </li>
            <li>
              <a href="/#">ElcoreCloud</a>
            </li>
            <li>
              <a href="/#">ElcoreIDE</a>
            </li>
            <li>
              <a href="/#">Обучение и ресурсы</a>
              <span></span>
            </li>
            <li>
              <a href="/#">Новости и статьи</a>
            </li>
          </ul>
          <button className="burger-menu">
            <span className="burger-menu__lines"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
