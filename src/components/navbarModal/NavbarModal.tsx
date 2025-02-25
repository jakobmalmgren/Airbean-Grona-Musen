import { NavLink } from "react-router-dom";
import "./NavbarModal.css";
// import to from "./../../../node_modules/colorjs.io/src/to";

const NavbarModal = () => {
  return (
    <section className="navbarModal">
      <ul className="navbarModal__ul">
        <li className="navbarModal__list">
          <NavLink to="/" className="navbarModal__link">
            Meny
          </NavLink>

          <section className="navbarModal__border"></section>
        </li>
        <li className="navbarModal__list">
          <NavLink to="/about" className="navbarModal__link">
            Vårt kaffe
          </NavLink>

          <section className="navbarModal__border"></section>
        </li>
        <li className="navbarModal__list">
          <NavLink to="/status" className="navbarModal__link">
            Orderstatus
          </NavLink>
          <section className="navbarModal__border"></section>
        </li>
      </ul>
    </section>
  );
};

export default NavbarModal;
