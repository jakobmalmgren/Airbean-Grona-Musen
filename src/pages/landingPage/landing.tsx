import "./Landing.css";

const HomePage: React.FC = ({ handleClick, home }) => {
  return home ? <div className="wrapper" onClick={handleClick}></div> : null;
};

export default HomePage;
