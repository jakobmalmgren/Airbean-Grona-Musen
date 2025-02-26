import "./Navbar.scss";
import Hamburger from "hamburger-react";

import { BsFillHandbagFill } from "react-icons/bs";
import {Item } from "../../types/types";

interface NavbarProps {
  handleBurgerMenu: () => void;
  handleCartModal: () => void;
  cart: Item[];
}

const Navbar: React.FC<NavbarProps> = ({ handleBurgerMenu, handleCartModal, cart }) => {
  
  const totalItems = cart.reduce((total, cartItem) => total + cartItem.antal, 0);
  
  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper" onClick={handleBurgerMenu}>
        <Hamburger />
      </section>
      <section className="navbar__basket" onClick={handleCartModal}>
        <section className="navbar__cart-count">{totalItems}</section>
        <section className="navbar__icon-wrapper">
          <BsFillHandbagFill className="navbar__icon" />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
