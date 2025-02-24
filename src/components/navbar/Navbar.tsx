import "./Navbar.scss";
import Hamburger from "hamburger-react";
import { BsFillHandbagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper">
        <Hamburger className="navbar__burger" />
      </section>
      <section className="navbar__basket">
        <section className="navbar__cart-count">1</section>
        <section className="navbar__icon-wrapper">
          <BsFillHandbagFill className="navbar__icon" />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
