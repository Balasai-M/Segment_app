import React from "react";

const Button = ({
  name = "Button",
  borderless = false,
  width = "100px",
  height = "40px",
  borderRadiusValue = "15px",
  bgColor = "#fff",
  textColor = "#000",
  boxShadow,
  justifyContentValue,
  onClick,
  disable = false,
  fontWeight = "",
  fontSize = "",
  id = "",
  className = "",
  border = "",
}) => {
  const buttonProps = {
    style: {
      width: width,
      height: height,
      borderRadius: borderless ? borderless : borderRadiusValue,
      display: "flex",
      justifyContent: justifyContentValue ? justifyContentValue : "center",
      alignItems: "center",
      backgroundColor: bgColor,
      color: textColor,
      boxShadow: boxShadow,
      cursor: disable ? "not-allowed" : "pointer",
      fontWeight: fontWeight,
      fontSize: fontSize,
      class: className,
      border: border,
    },
  };

  return (
    <div
      id={id}
      className={className}
      label={name}
      {...buttonProps}
      onClick={onClick}
      disable={disable}
    >
      {name}
    </div>
  );
};

export default Button;
