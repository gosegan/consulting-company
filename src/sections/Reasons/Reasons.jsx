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
        <SectionTitle>Open your website</SectionTitle>
        <SectionUnderTitle>Maybe something is wrong?</SectionUnderTitle>
        <figure
          style={{ textAlign: "center", position: "relative", margin: "0px" }}
        >
          <img src={comp} alt="computer" className="reasons__img" />
          <p className="reasons__txt1">Maybe you don't like the text?</p>
          <p className="reasons__txt2">Or are you not happy with the illustrations?</p>
          <p className="reasons__txt3">Maybe the style of your site is outdated?</p>
          <p className="reasons__txt4">Or maybe you just want to refresh the site?</p>
          <p className="reasons__txt5">Or do I need to add some animation?</p>
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
          Yes, what should I do?
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Reasons;
