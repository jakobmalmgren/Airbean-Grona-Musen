// import MenuList from "./components/menu/meny";



import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarModal from "./components/navbarModal/NavbarModal";
import NoOrderStatus from "./components/NoOrderStatus/NoOrderStatus"
import Button from "./components/button/button";

function App() {
  // usestage för o hantera true & false för menyn
  const [handleToggle, setHandleToggle] = useState(false);
  // ändrar från true/false
  const handleBurgerMenu = () => {
    setHandleToggle((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Navbar handleBurgerMenu={handleBurgerMenu} />
      {handleToggle ? <NavbarModal /> : ""}
    </>
  );
}

export default App;
