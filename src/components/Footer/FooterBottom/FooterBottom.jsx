import React from "react";
import Social from "../../Social/Social";
import "./FooterBottom.scss";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom__container">
          <Social footer={true} />
          <nav className="footer-bottom__info">
            <ul>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Карта сайта</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
