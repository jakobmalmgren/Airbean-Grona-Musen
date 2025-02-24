import "./cartModal.css";
import CartModalOrderItem from "./CartModalOrderItem";
import Button from "./../Button";

const CartModal = () => {
  return (
    <section className="cartModal">
      <section className="cartModal__inner-container">
        <h1 className="cartModal__header">Din beställning</h1>
        <div className="cartModal__tip"></div>
        <CartModalOrderItem />
        <CartModalOrderItem />
        <section className="cartModal__wrapper">
          <section className="cartModal__price-section">
            <h2 className="cartModal__lower-header">Total </h2>
            <h2 className="cartModal__dots"></h2>
            <p className="cartModal__price">88kr</p>
          </section>

          <p className="cartModal__extra-info-secction">
            inkl moms + drönarleverans
          </p>
          <section className="cartModal__btn-wrapper">
            <Button
              bgColor={"rgba(47, 41, 38, 1)"}
              color={" rgba(255, 255, 255, 1)"}
            >
              Take my money!
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CartModal;
