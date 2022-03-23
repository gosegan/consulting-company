import React, { useState } from "react";
import styled from "styled-components";
import { Radio, RadiosWrap } from "../../components/RadiosGroup/RadiosGroup";

const SectionTitle = styled.h2`
  font-size: 38px;
  text-align: center;
  margin-bottom: 44px;
  width: 720px;
  margin: 0px auto;
`;

const SectionWrapper = styled.div`
  padding: 46px 0 41px;
  background: rgba(252, 219, 26, 0.1);
`;

const Contact = () => {
  const [state, setState] = useState({
    social: "",
  });

  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>
          Leave your <span className="yellow-text">phone number</span>,{" "}
          <br></br>and we will contact you{" "}
          <span className="blue-text">within an hour</span> in a social network convenient for you
        </SectionTitle>
        <form className="form" action="POST">
          <input
            type="tel"
            className="form__input"
            placeholder="Your telephone number"
          />
          <RadiosWrap
            className="radioWrap"
            selected={state.social}
            setSelected={(selected) => setState({ ...state, social: selected })}
          >
            {["Telegram", "WhatsApp", "Viber"].map((item, id) => {
              return (
                <div key={id} style={{ marginBottom: 8 }}>
                  <Radio value={item}>{item}</Radio>
                </div>
              );
            })}
          </RadiosWrap>
          <button className="form__btn btn">Contact me </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
