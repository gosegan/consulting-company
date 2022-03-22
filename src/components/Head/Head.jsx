import React from "react";
import "./Head.scss";
import { InstagramIcon } from "../../images/instagram.svg"
import { LinkedinIcon } from "../../images/instagram.svg"

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
        <a className="head__link" href="#">
          <img src={InstagramIcon} alt="icon" />
        </a>
        <a className="head__link" href="#">
          <img src={LinkedinIcon} alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Head;
