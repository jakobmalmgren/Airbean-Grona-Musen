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
  const [cartModal, setCartModal] = useState(false);
  const [home, setHome] = useState(true);

  //togglar menyn false true
  const handleBurgerMenu = () => {
    setHandleToggle((prev) => {
      console.log(handleToggle);

      return !prev;
    });
  };
  //togglar cartModal false true
  const handleCartModal = () => {
    setCartModal((prev) => {
      return !prev;
    });
  };

  const navigate = useNavigate();
  // tar oss från startsidan ill "/"
  // och ser till så den togglar state
  const handleClick: () => void = () => {
    navigate("/");
    setHome((prev) => {
      return !prev;
    });
  };

  return (
    // här skickas en del state och sen funktioner
    //outlet är där vi renderar all content mellan nav och footer
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
