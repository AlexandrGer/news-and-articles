import React, { useState } from "react";
import { dataList } from "../../utils/Data";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList() {
  const [activeButton, setActiveButton] = useState("all");

  const buttons = [
    { id: "all", label: "Все новости и статьи" },
    { id: "news", label: "Новости" },
    { id: "articles", label: "Статьи" },
  ];

  const newObjects = Array.from({ length: 6 }, (_, i) => {
    const original = dataList[i % dataList.length];
    return {
      ...original,
      id: dataList.length + i + 1,
    };
  });

  const newDataList = [...dataList, ...newObjects].sort(
    () => Math.random() - 0.5
  );

  const filterDataList = () => {
    if (activeButton === "all") {
      return newDataList;
    }
    return newDataList.filter((item) => item.type === activeButton);
  };

  const filteredList = filterDataList();

  function handleButtonClick(id) {
    setActiveButton(id);
  }

  return (
    <div className="card-list">
      <div className="container">
        <div className="card-list__container">
          <ul className="card-list__tags">
            {buttons.map((button) => (
              <li
                className={
                  activeButton === button.id
                    ? "card-list__tag card-list__tag_active"
                    : "card-list__tag"
                }
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
              >
                {button.label}
              </li>
            ))}
          </ul>
          <div className="card-list__wrapper">
            <ul className="card-list__items">
              {filteredList.map((card) => (
                <li key={card.id}>
                  <Card card={card} />
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button className="button-prev" disabled></button>
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <span>...</span>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
              </ul>
              <button className="button-next"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
