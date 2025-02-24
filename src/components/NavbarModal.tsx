import "./NavbarModal.css";

const NavbarModal = () => {
  return (
    <section className="navbarModal">
      <ul className="navbarModal__ul">
        <li className="navbarModal__list">
          <a className="navbarModal__link" href="">
            Meny
          </a>
          <section className="navbarModal__border"></section>
        </li>
        <li className="navbarModal__list">
          <a className="navbarModal__link" href="">
            Vårt kaffe
          </a>
          <section className="navbarModal__border"></section>
        </li>
        <li className="navbarModal__list">
          <a className="navbarModal__link" href="">
            Orderstatus
          </a>
          <section className="navbarModal__border"></section>
        </li>
      </ul>
    </section>
  );
};

export default NavbarModal;
