import React from "react";
import "./index.css";

const InputField = ({
  name = "Input",
  value,
  inputHeight = "70px",
  placeholder,
  type,
  label,
  id,
  style,
  onBlur,
  onChange,
  onClick,
  maxLength,
  disable,
  field,
  defaultValue,
  classNameInLabel = '',
}) => {
  const inputProps = {
    style: { ...style, width: "306px", height: "60px" , borderRadius : "30px"  },
  };


  return (
    <div className="Input-container" {...inputProps}>
      <div className={`input-name-block ${classNameInLabel}`}>
        {label}
      </div>
      <input
        type={type}
        name={name}
        label={label}
        id={id}
        onBlur={onBlur}
        maxLength={maxLength}
        className={"input"}
        placeholder={placeholder !== "" ? placeholder : name}
        style={style}
        inputHeight = {inputHeight || ""}
        onChange={onChange}
        value= { value && value[field]}
        disabled={disable}
        onClick={onClick}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputField;
