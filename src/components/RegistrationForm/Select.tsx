import React, { forwardRef } from "react";
import "./Input.css";

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: { value: string | number; text: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { placeholder, options, ...rest } = props;

  return (
    <div className="float-wrapper active">
      <label htmlFor={props.name}>{props.placeholder}</label>
      <select ref={ref} id={props.name} {...rest}>
        {options.map((o) => (
          <option key={o.value} {...o}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
