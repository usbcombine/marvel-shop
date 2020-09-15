import React from "react";
import "./Comic.css";
import { useStateValue } from "../StateProvider";

const Comic = ({ comic }) => {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveFromCart = (comic) => {
    dispatch({ type: "REMOVE_FROM_CART", comic: comic });
  };

  return (
    <div className="cart__comic">
      <div className="cart__comic__left-part">
        <img
          className="cart__comic__image"
          src={`${comic.images[0].path}/landscape_incredible.${comic.images[0].extension}`}
          alt={comic.title}
        />
        <p className="cart__comic__price">${comic.prices[0].price || 2.49}</p>
        <button
          className="button"
          onClick={() => {
            handleRemoveFromCart(comic);
          }}
        >
          REMOVE FROM CART
        </button>
      </div>
      <div className="cart__comic__right-part">
        <div className="cart__comic__title">{comic.title}</div>
        <div className="cart__comic__info-label">Created:</div>
        <div className="cart__comic__info">
          {comic.dates[0].date.slice(0, 10)}
        </div>
        <div className="cart__comic__info-label">Creators:</div>
        <div className="cart__comic__info">
          {comic.creators.items?.map((item) => item.name).join(", ")}
        </div>
        <div className="cart__comic__info-label">Characters:</div>
        <div className="cart__comic__info">
          {comic.characters.items
            ?.map((item) => {
              return item.name;
            })
            .join(", ")}
        </div>
        <div className="cart__comic__description">
          {comic.description?.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
      </div>
    </div>
  );
};

export default Comic;
