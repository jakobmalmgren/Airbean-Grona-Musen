import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarModal from "./components/navbarModal/NavbarModal";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

import CartModal from "./components/cartModal/CartModal";

function App() {
  // usestage för o hantera true & false för menyn
  const [handleToggle, setHandleToggle] = useState(false);
  // ändrar från true/false
  const handleBurgerMenu = () => {
    setHandleToggle((prev) => {
      return !prev;
    });
  };
  const [cartModal, setCartModal] = useState(false);

  const handleCartModal = () => {
    setCartModal((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {/* <HomePage /> */}
      <Navbar
        handleBurgerMenu={handleBurgerMenu}
        handleCartModal={handleCartModal}
      />

      {cartModal ? <CartModal /> : ""}
      {handleToggle ? <NavbarModal /> : ""}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
