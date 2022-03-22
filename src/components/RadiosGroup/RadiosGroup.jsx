import React from "react";
import "./RadiosGroup.scss";
import { RadioGroup, RadioButton } from "react-custom-radio";

export const RadiosWrap = ({
  selected,
  setSelected,
  className,
  children,
  style,
}) => {
  const onHandleClick = (evt) => {
    !!setSelected && setSelected(evt);
  };

  return (
    <RadioGroup
      className={className}
      style={style}
      selectedValue={selected}
      onChange={onHandleClick}
    >
      {children}
    </RadioGroup>
  );
};

export const Radio = ({ value = children, children, style }) => {
  return (
    <RadioButton style={style} value={value} className="radioButton">
      <span>{children}</span>
    </RadioButton>
  );
};

