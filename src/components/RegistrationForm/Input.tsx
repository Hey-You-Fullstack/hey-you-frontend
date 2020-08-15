import React, { useState, forwardRef } from "react";
import "./Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholder, ...rest } = props;
  const [active, setActive] = useState<boolean>(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    void e;
    setActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) return;
    setActive(false);
  };

  return (
    <div className={`float-wrapper ${active ? "active" : ""}`}>
      <label htmlFor={props.name}>{props.placeholder}</label>
      <input
        ref={ref}
        id={props.name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </div>
  );
});

export default Input;
