import React from "react";
import Head from "../../components/Head/Head";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={bg1} alt="background" className="header__img" />
        <Head />
        <h1 className="header__title">Ваш сайт больше не продаёт?</h1>
        <h2 className="header__title-small">
          Люди заходят на него, но не делают покупки?
        </h2>
        <p className="header__text">
          Это может быть совершенно <span className="yellow">не</span> из-за
          того, что <span className="blue">ваш продукт</span> потерял
          актуальность!
        </p>
        <a href="#" className="header__btn btn">
          А почему тогда?
        </a>
      </div>
      <img src={bg2} alt="background" className="header__img1" />
    </header>
  );
};

export default Header;
