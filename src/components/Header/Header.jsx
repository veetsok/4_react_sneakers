import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import "./styled.scss";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="header">
      <Link to="/">
        <div className="header__block">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header__ul">
        <li onClick={props.onClickCart} className="header__ul__li">
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
