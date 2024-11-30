import React from "react";
import "./Card.scss";

export default function Card({ card }) {
  return (
    <div className="card">
      {card.image ? (
        <img src={card.image} alt={card.title} className="card__image" />
      ) : (
        <div className="image-container">
          <img src="./images/noImage.png" alt="Картинка" />
        </div>
      )}
      <div className="card__info">
        {card.date ? (
          <>
            <p>{card.date}</p>
            <span>/</span>
            <p>{card.type}</p>
          </>
        ) : (
          <p>{card.type}</p>
        )}
      </div>
      <h2 className="card__title">{card.title}</h2>
      <p className="card__description">{card.description}</p>
    </div>
  );
}
