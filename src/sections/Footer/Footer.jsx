import React from "react";
import styled from "styled-components";
import { InstagramIcon } from "../../images/instagram.svg"
import { LinkedinIcon } from "../../images/instagram.svg"

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
          <a className="links__link" href="#">
            <img src={InstagramIcon} alt="icon" />
          </a>
          <a className="links__link" href="#">
            <img src={LinkedinIcon} alt="icon" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
