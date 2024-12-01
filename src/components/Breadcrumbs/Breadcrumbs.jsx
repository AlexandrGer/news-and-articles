import React from "react";
import "./Breadcrumbs.scss";

export default function Breadcrumbs() {
  const items = [
    { name: "Главная", link: "#" },
    { name: "Новости и статьи", link: "#" },
  ];
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__container">
          {items.map((item, index) =>
            index + 1 !== items.length ? (
              <div className="crumb" key={index}>
                <a href={item.link}>{item.name}</a>
                <span>/</span>
              </div>
            ) : (
              <p className="crumb crumb_active" key={index}>
                {item.name}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
