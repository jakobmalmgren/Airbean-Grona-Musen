import "./Button.css";

const Button = ({ children, bgColor, color }) => {
  return (
    <button className="btn" style={{ backgroundColor: bgColor, color: color }}>
      {children}
    </button>
  );
};

export default Button;
