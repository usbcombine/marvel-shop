import React, { useState, useEffect } from "react";
import "./Menu.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Menu = () => {
  const [fill, setFill] = useState(false);
  const [{ cart }] = useStateValue();
  useEffect(() => {
    window.addEventListener("scroll", listenScrollY);

    return () => {
      window.removeEventListener("scroll", listenScrollY);
    };
  }, []);

  const listenScrollY = () => {
    if (window.scrollY > 100) {
      setFill(true);
    } else {
      setFill(false);
    }
  };

  return (
    <div className={`menu ${fill && "menu--black"}`}>
      <Link to="/">
        <img src="800px-MarvelLogo.svg.png" alt="Logo" className="menu__logo" />
      </Link>
      <Link className="menu__cart" to="/cart">
        <i className="fas fa-shopping-cart fa-lg"></i>
        <span className="menu__cart-total">{cart.length}</span>
      </Link>
    </div>
  );
};

export default Menu;
