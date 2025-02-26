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

  // nyttt med API jakob:
  //cartens state
  // carten ska skickas ttill cartmodalen
  //fixade med outlet med och skicka props via useoutletcontext på menupage
  const [cart, setCart] = useState([]);
  const handleUpdateCart = (item) => {
    // gör en check o ser om obj redan finns i array, finns de lägg
    //till text 2 stycken..

    //kollar om obj finns i array:
    const itemExists = cart.find((cartItem) => {
      return cartItem.title === item.title;
    });
    if (itemExists) {
      console.log("item exists");

      console.log("uppdaterad cartt", cart);

      // HUR ÄNDRAR JAG DÄR SÅ MAN LÄGGER TILL PROPERY MED ANTAL:2
      setCart((prevCart) =>
        prevCart.map(
          (cartItem) =>
            cartItem.title === item.title
              ? { ...cartItem, antal: (cartItem.antal += 1) } // Lägg till 1 till antal
              : cartItem // Behåll andra objekt oförändrade
        )
      );
    } else {
      console.log("item NOT! exists");

      // Om objektet inte finns, lägg till det med antal: 1
      setCart((prevCart) => [...prevCart, { ...item, antal: 1 }]);
    }
  };

  console.log("uppdatterad meny", cart);

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

          {cartModal && <CartModal cart={cart} />}
          {handleToggle && <NavbarModal handleBurgerMenu={handleBurgerMenu} />}

          <Outlet context={{ handleUpdateCart: handleUpdateCart }} />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
