import React, { useState } from "react";
import useWindoWidth from "../../../utils/useWindowWidth";
import "./HeaderMenu.scss";
import BurgerMenu from "../../Burger/Burger";

export default function HeaderMenu() {
  const windowWidth = useWindoWidth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-menu">
      <div className="container">
        <nav className="header-menu__container">
          <img src="./images/logo.png" alt="logo" className="logo" />
          {windowWidth >= 424 && (
            <ul className="menu">
              <li>
                <a href="#">ElcoreStore</a>
              </li>
              <li>
                <a href="#">ElcoreCloud</a>
              </li>
              <li>
                <a href="#">ElcoreIDE</a>
              </li>
              {windowWidth >= 539 && (
                <>
                  <li style={{ position: "relative" }} onClick={toggleMenu}>
                    <p>Обучение и ресурсы</p>
                    <button
                      className={isOpen ? "arrow arrow_up" : "arrow "}
                    ></button>
                    {isOpen && (
                      <ul className="menu__list">
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
                </>
              )}
            </ul>
          )}
          <BurgerMenu />
        </nav>
      </div>
    </div>
  );
}
