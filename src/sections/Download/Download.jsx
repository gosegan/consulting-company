import React from "react";
import styled from "styled-components";

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
  background: rgba(95, 68, 235, 0.1);
`;

const Donwload = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>Хотите заняться всем сами?</SectionTitle>
        <SectionUnderTitle>Без проблем!</SectionUnderTitle>
        <div className="download">
          <p className="download__text">
            Вот вам файл с возможными 15-ю причинами, почему ваш сайт может
            проседать по продажам
          </p>
          <div className="download__wrapper">
            <p className="download__here">Тот самый файл</p>
            <a href="#" className="download__link" download>
              Скачать
            </a>
          </div>
          <p className="download__text-fly">Download</p>
        </div>
        <h3 className="download__title">
          Но, если вы хотите быть удовлетворены{" "}
          <span className="blue-text">наиболее качественно </span>
          выполненным заданием, либо у вас попросту{" "}
          <span className="blue-text">нет времени</span> этим заниматься -{" "}
          <span className="yellow-text">жмите на кнопку</span>
        </h3>
        <a href="#" className="btn download__btn">
          Обновите мой сайт
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Donwload;
