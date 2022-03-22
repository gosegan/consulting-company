import React from "react";
import styled from "styled-components";
import AdvItem from "../../components/AdvItem";

const SectionWrapper = styled.div`
  padding: 70px 0 100px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  width: 500px;
  margin: 0 auto 38px;
`;

const Update = () => {
  return (
    <SectionWrapper className="advantages-wrapper">
      <div className="container">
        <SectionTitle>Что вам даст обновление вашего сайта?</SectionTitle>
        <div className="advantages">
          <AdvItem icon="" text="Увеличатся продажи" />
          <AdvItem icon="" text="Увеличится трафик" />
          <AdvItem icon="" text="Клиенты будут довольны" />
        </div>
        <a href="#" className="btn advantages-btn">
          Обновите мой сайт
        </a>
        <div className="circle yellow-circle circle1"></div>
        <div className="circle blue-circle circle2"></div>
        <div className="circle blue-circle circle3"></div>
      </div>
    </SectionWrapper>
  );
};

export default Update;
