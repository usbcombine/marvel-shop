import React from "react";
import "./Cart.css";
import Comic from "./Comic";
import { useStateValue } from "../StateProvider";

const Cart = () => {
  const [{ cart }] = useStateValue();
  const total = cart.length;

  const prices = cart?.map((item) => {
    return item.prices[0].price || 2.49;
  });
  const price = prices.length ? prices.reduce((a, b) => a + b) : "0.00";

  return (
    <div className="cart">
      <div className="slider__title">
        Total ({total}): ${Number.parseFloat(price).toFixed(2)}
      </div>
      {cart.map((comic) => (
        <Comic key={comic.id} comic={comic} />
      ))}
    </div>
  );
};

export default Cart;
