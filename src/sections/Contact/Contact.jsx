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
          Оставьте ваш <span className="yellow-text">номер телефона</span>,{" "}
          <br></br>и мы свяжемся с вами{" "}
          <span className="blue-text">в течении часа</span> в удобной для вас
          соцсети
        </SectionTitle>
        <form className="form" action="POST">
          <input
            type="tel"
            className="form__input"
            placeholder="Ваш номер телефона"
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
          <button className="form__btn btn">Свяжитесь со мной</button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
