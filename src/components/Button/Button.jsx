import React from "react";
import { SButton } from "./Button.styled";

const Button = ({ onClick = null, text, type = "button", className }) => {
  return (
    <SButton type={type} onClick={onClick} className={className}>
      {text}
    </SButton>
  );
};

export default Button;
