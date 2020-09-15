import React from "react";
import "./Comic.css";
import { useStateValue } from "../StateProvider";

const Comic = ({ comic }) => {
  const [{ cart }, dispatch] = useStateValue();

  const handleAddToCart = (comic) => {
    dispatch({ type: "ADD_TO_CART", comic: comic });
  };

  return (
    <div className="comic">
      <div className="comic__left-part">
        <img
          className="comic__image"
          src={`${comic.images[0].path}/portrait_incredible.${comic.images[0].extension}`}
          alt={comic.title}
        />
        <p className="comic__price">${comic.prices[0].price || 2.49}</p>
        <button
          className="button"
          onClick={() => {
            handleAddToCart(comic);
          }}
        >
          ADD TO CART
        </button>
      </div>
      <div className="comic__right-part">
        <div className="comic__title">{comic.title}</div>
        <div className="comic__info-label">Created:</div>
        <div className="comic__info">{comic.dates[0].date.slice(0, 10)}</div>
        <div className="comic__info-label">Creators:</div>
        <div className="comic__info">
          {comic.creators.items?.map((item) => item.name).join(", ")}
        </div>
        <div className="comic__info-label">Characters:</div>
        <div className="comic__info">
          {comic.characters.items
            ?.map((item) => {
              return item.name;
            })
            .join(", ")}
        </div>
        <div className="comic__description">
          {comic.description?.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
      </div>
    </div>
  );
};

export default Comic;
