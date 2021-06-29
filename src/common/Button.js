import React from "react";
import classNames from "classnames";
import "./button.css";

const Button = ({ label, ...props }) => {
  const btnClass = classNames({
    button: true,
  });
  return (
    <button className={btnClass} {...props}>
      {label}
    </button>
  );
};

export default Button;
