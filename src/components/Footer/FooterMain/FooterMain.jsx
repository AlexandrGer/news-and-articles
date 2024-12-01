import React from "react";
import "./FooterMain.scss";

export default function FooterMain() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer-main__container">
          <div className="footer-main__info">
            <img
              src="./images/logo.png"
              alt="logo"
              className="logo logo_footer"
            />
            <p className="footer-main__info-text">
              Платформа для автоматизации ваших процессов
            </p>
            <button className="footer-main__info-button"></button>
            <p className="footer-main__info-copyright">
              © ООО «НПО «Фарватер» 2024
            </p>
          </div>
          <div className="footer-main__columns">
            <nav className="footer-main__column">
              <h3 className="footer-main__column-heading">Платформа</h3>
              <ul className="footer-main__column-links">
                <li>
                  <a href="#">ElcoreStore</a>
                </li>
                <li>
                  <a href="#">ElcoreCloud</a>
                </li>
                <li>
                  <a href="#">ElcoreIDE</a>
                </li>
              </ul>
            </nav>
            <nav className="footer-main__column">
              <h3 className="footer-main__column-heading">
                Обучение и ресурсы
              </h3>
              <ul className="footer-main__column-links">
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
            </nav>
            <nav className="footer-main__column">
              <a href="#" className="footer-main__column-button">
                Личный кабинет
              </a>
              <ul className="footer-main__column-links">
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Новости и статьи</a>
                </li>
                <li>
                  <a href="#">Сообщество (Форум)</a>
                </li>
                <li>
                  <a href="#">Тех поддержка</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
