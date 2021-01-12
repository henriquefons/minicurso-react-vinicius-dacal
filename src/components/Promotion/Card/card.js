import React from "react";
import "./card.css";

const PromotionCard = ({ promotion }) => {
  return (
    <div className="promotion-card">
      <img className="promotion-card__image" src={promotion.imageUrl} />
      <div>
        <h1 className="promotion-card__title ">{promotion.title}</h1>
        <span className="promotion-card__price">R$ {promotion.price}</span>
        <footer className="promotion-card__footer">
          {promotion.comments.length > 0 && (
            <div className="promotion-card__comment">
              "{promotion.comments[0].comment}"
            </div>
          )}
          <div className="promotion-card__coments-count">
            {promotion.comments.length} {" "}
            {promotion.comments.length > 1 ? "Comentarios" : "Comentario"}
          </div>
          <a
            href={promotion.url}
            target="_black"
            className="promotion-card__link"
          >
            IR PARA O SITE
          </a>
        </footer>
      </div>
    </div>
  );
};

export default PromotionCard;
