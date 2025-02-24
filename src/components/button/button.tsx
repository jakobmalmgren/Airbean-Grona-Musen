import React from "react";
import "./button.scss";

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  color: string;
};

const Button = ({
  children,
  bgColor,
  color,
}: ButtonProps): React.JSX.Element => {
  return (
    <button className="btn" style={{ backgroundColor: bgColor, color: color }}>
      {children}
    </button>
  );
};

export default Button;
