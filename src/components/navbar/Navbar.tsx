import "./Navbar.scss";
import Hamburger from "hamburger-react";

import { BsFillHandbagFill } from "react-icons/bs";

const Navbar = ({ handleBurgerMenu, handleCartModal }) => {
  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper" onClick={handleBurgerMenu}>
        <Hamburger className="navbar__burger" />
      </section>
      <section className="navbar__basket" onClick={handleCartModal}>
        <section className="navbar__cart-count">1</section>
        <section className="navbar__icon-wrapper">
          <BsFillHandbagFill className="navbar__icon" />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
