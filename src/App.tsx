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
  const [cart, setCart] = useState([]);
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

  //

  const [orderNr, setOrderNr] = useState();

  const postRequest = async () => {
    console.log("cart:", cart);

    const postCart = {
      details: {
        order: cart.map((item) => {
          return {
            name: item.title,
            price: item.price,
          };
        }),
      },
    };
    console.log("postcard", postCart);

    const url = "https://airbean-9pcyw.ondigitalocean.app/api/beans/order";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postCart),
      });

      // Vänta på att servern svarar och returnera svaret i JSON-format
      const data = await response.json();

      setOrderNr(data.orderNr);
      console.log("ordernr!!!", data.orderNr);

      if (!response.ok) {
        // Hantera eventuella fel här om svaret inte var ok
        throw new Error(`Error: ${data.message || "Something went wrong"}`);
      }

      console.log("User created successfully:", data); // Hantera den skapade användaren
    } catch (error) {
      console.error("Error creating user:", error); // Hantera fel om något går fel
    }
  };

  //

  return (
    // här skickas en del state och sen funktioner
    //outlet är där vi renderar all content mellan nav och footer
    <>
      {home ? (
        <HomePage home={home} handleClick={handleClick} />
      ) : (
        <section className="app-wrapper">
          {location.pathname !== "/status" && (
            <Navbar
              cart={cart}
              handleBurgerMenu={handleBurgerMenu}
              handleCartModal={handleCartModal}
            />
          )}

          {cartModal && (
            <CartModal
              setCart={setCart}
              postRequest={postRequest}
              cart={cart}
            />
          )}
          {handleToggle && <NavbarModal handleBurgerMenu={handleBurgerMenu} />}

          <Outlet
            context={{ handleUpdateCart: handleUpdateCart, orderNr: orderNr }}
          />
          {location.pathname !== "/status" && <Footer />}
        </section>
      )}
    </>
  );
}

export default App;