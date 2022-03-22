import React from "react";
import styled from "styled-components";
import comp from "../../images/computer.png";

const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
`;

const SectionUnderTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  margin-bottom: 45px;
`;

const SectionWrapper = styled.div`
  padding: 70px 0;
`;

const Reasons = () => {
  return (
    <SectionWrapper className="reasons">
      <div className="container">
        <SectionTitle>Откройте свой сайт</SectionTitle>
        <SectionUnderTitle>Может быть что-нибудь не так?</SectionUnderTitle>
        <figure
          style={{ textAlign: "center", position: "relative", margin: "0px" }}
        >
          <img src={comp} alt="computer" className="reasons__img" />
          <p className="reasons__txt1">Может вам не нравится текст?</p>
          <p className="reasons__txt2">Или вы не довольны иллюстрациями?</p>
          <p className="reasons__txt3">Может устарел стиль вашего сайта?</p>
          <p className="reasons__txt4">А может хочется просто освежить сайт?</p>
          <p className="reasons__txt5">Или нужно добавить немного анимации?</p>
          <div className="circle blue-circle circle1"></div>
          <div className="circle yellow-circle circle2"></div>
          <div className="circle yellow-circle circle3"></div>
          <div className="circle yellow-circle circle4"></div>
          <div className="circle blue-circle circle5"></div>
          <div className="circle yellow-circle circle6"></div>
          <div className="circle yellow-circle circle7"></div>
          <div className="circle blue-circle circle8"></div>
        </figure>
        <a href="#" className="btn reasons__btn">
          Да, а что мне делать?
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Reasons;
