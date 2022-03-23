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
        <SectionTitle>Do you want to do everything yourself?</SectionTitle>
        <SectionUnderTitle>No problem!</SectionUnderTitle>
        <div className="download">
          <p className="download__text">
            Here is a file for you with possible 15 reasons why your site may be sagging in sales
          </p>
          <div className="download__wrapper">
            <p className="download__here">Тот самый файл</p>
            <a href="#" className="download__link" download>
              Download
            </a>
          </div>
          <p className="download__text-fly">Download</p>
        </div>
        <h3 className="download__title">
          But if you want to be satisfied{" "}
          <span className="blue-text">the most high-quality </span>
          a completed task, or you simply don't have{" "}
          <span className="blue-text">time</span> do this -{" "}
          <span className="yellow-text">click on the button</span>
        </h3>
        <a href="#" className="btn download__btn">
          Update my website
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Donwload;
