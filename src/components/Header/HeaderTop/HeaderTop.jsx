import React from "react";
import Social from "../../Social/Social";
import "./HeaderTop.scss";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top__container">
          <Social />
          <div className="header-top__wrapper">
            <nav className="navigation-links">
              <ul>
                <li>
                  <a href="/#">Форум</a>
                </li>
                <li>
                  <a href="/#">Поиск</a>
                </li>
                <li>
                  <a href="/#">Контакты</a>
                </li>
              </ul>
            </nav>
            <nav className="user-menu">
              <ul>
                <li>
                  <a href="/#">
                    <img
                      src="./images/star-icon.svg"
                      alt="Избранное"
                      className="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <img
                      src="./images/basket-icon.svg"
                      alt="Корзина"
                      className="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="/#">Личный кабинет</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
