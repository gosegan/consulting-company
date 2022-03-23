import React from "react";
import "./Head.scss";
import InstagramIcon from "../../images/instagram.png"
import FacebookIcon from "../../images/facebook.png"

const Head = () => {
  return (
    <div className="head">
      <a href="#" className="head__logo">
        Quick Sale
      </a>
      <ul className="head__menu">
        <li className="head__item">
          <a href="#" style={{ color: "#000000" }}>
            Главная
          </a>
        </li>
        <li className="head__item">
          <a href="#">Что не так?</a>
        </li>
        <li className="head__item">
          <a href="#">Хочу все сам</a>
        </li>
        <li className="head__item">
          <a href="#">Перспективы</a>
        </li>
        <li className="head__item">
          <a href="#">Свяжитесь с нами</a>
        </li>
      </ul>
      <div className="head__links">
        <a className="link__img head__link" href="#">
          <img className="link__img" src={InstagramIcon} alt="icon" />
        </a>
        <a className="link__img head__link" href="#">
          <img className="link__img" src={FacebookIcon} alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Head;
