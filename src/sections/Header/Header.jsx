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
        <h1 className="header__title">Is your site no longer selling?</h1>
        <h2 className="header__title-small">
          People visit it, but don't make purchases?
        </h2>
        <p className="header__text">
          It can be completely <span className="yellow">not</span> because of the fact that <span className="blue">your product</span> lost relevance!
        </p>
        <a href="#" className="header__btn btn">
          And why then?
        </a>
      </div>
      <img src={bg2} alt="background" className="header__img1" />
    </header>
  );
};

export default Header;
