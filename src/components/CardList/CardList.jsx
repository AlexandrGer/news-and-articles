import React from "react";
import { dataList } from "../../utils/Data";
import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList() {
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

  return (
    <div className="card-list">
      <div className="container">
        <div className="card-list__container">
          <ul className="card-list__tag">
            <li>Все новости и статьи</li>
            <li>Новости</li>
            <li>Статьи</li>
          </ul>
          <div className="card-list__wrapper">
            <ul className="card-list__items">
              {newDataList.map((card) => (
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
