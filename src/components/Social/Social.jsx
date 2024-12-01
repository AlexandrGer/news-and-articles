import React from "react";
import "./Social.scss";

export default function Social({ footer }) {
  return (
    <nav className="social">
      <ul
        className={
          footer ? "social__links social__links_footer" : "social__links"
        }
      >
        <li>
          <a href="#">
            <img src="./images/telegram.svg" alt="telegram" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/dzen.svg" alt="dzen" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/youtube.svg" alt="youtube" className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/vk.svg" alt="vk" className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
