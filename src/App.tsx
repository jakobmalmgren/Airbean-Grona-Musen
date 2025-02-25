import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarModal from "./components/navbarModal/NavbarModal";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useNavigate } from "react-router-dom";
import CartModal from "./components/cartModal/CartModal";
import HomePage from "./pages/landingPage/landing";

function App() {
  // usestage för o hantera true & false för menyn
  const [handleToggle, setHandleToggle] = useState(false);
  // ändrar från true/false
  const handleBurgerMenu = () => {
    setHandleToggle((prev) => {
      console.log(handleToggle);

      return !prev;
    });
  };
  const [cartModal, setCartModal] = useState(false);

  const handleCartModal = () => {
    setCartModal((prev) => {
      return !prev;
    });
  };

  const [home, setHome] = useState(true);
  const navigate = useNavigate();
  const handleClick: () => void = () => {
    navigate("/");
    setHome((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {home ? (
        <HomePage home={home} handleClick={handleClick} />
      ) : (
        <section className="app-wrapper">
          <Navbar
            handleBurgerMenu={handleBurgerMenu}
            handleCartModal={handleCartModal}
          />
          {cartModal && <CartModal />}
          {handleToggle && <NavbarModal handleBurgerMenu={handleBurgerMenu} />}
          <Outlet />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
