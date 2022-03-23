import React from "react";
import styled from "styled-components";
import InstagramIcon from "../../images/instagram.png"
import FacebookIcon from "../../images/facebook.png"

const SectionWrapper = styled.div`
  padding: 55px 0;
  background: #5f44eb;
`;

const Footer = () => {
  return (
    <SectionWrapper className="footer">
      <div className="container">
        <figure>
          Quick Sale
        </figure>
        <div className="links">
          <a className="link__img head__link" href="#">
            <img className="link__img" src={InstagramIcon} alt="icon" />
          </a>
          <a className="link__img head__link" href="#">
            <img className="link__img" src={FacebookIcon} alt="icon" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
