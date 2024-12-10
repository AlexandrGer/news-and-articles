import React, { useState } from "react";
import "./Burger.scss";

export default function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <button className="burger-menu" onClick={toggleBurger}>
        <span
          className={` ${
            burgerOpen
              ? "burger-menu__lines burger-menu__lines_open"
              : "burger-menu__lines"
          }`}
        ></span>
      </button>
      {burgerOpen && (
        <nav className="burger-menu_nav">
          <ul>
            <li>
              <a href="#">ElcoreStore</a>
            </li>
            <li>
              <a href="#">ElcoreCloud</a>
            </li>
            <li>
              <a href="#">ElcoreIDE</a>
            </li>
            <li
              className={`${
                menuOpen
                  ? "burger-menu__list burger-menu__list_open"
                  : "burger-menu__list"
              }`}
              style={{ position: "relative" }}
              onClick={toggleMenu}
            >
              <div>
                <p>Обучение и ресурсы</p>
                <button
                  className={menuOpen ? "arrow arrow_up" : "arrow "}
                ></button>
              </div>

              {menuOpen && (
                <ul>
                  <li>
                    <a href="#">Что такое ElcorePLC</a>
                  </li>
                  <li>
                    <a href="#">Документация</a>
                  </li>
                  <li>
                    <a href="#">Обучающие материалы</a>
                  </li>
                  <li>
                    <a href="#">Примеры использования</a>
                  </li>
                  <li>
                    <a href="#">База знаний</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Новости и статьи</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
