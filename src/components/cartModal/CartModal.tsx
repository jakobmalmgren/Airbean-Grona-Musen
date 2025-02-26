import "./cartModal.css";
import Button from "../button/button";
import CartModalOrderItem from "../cartModalOrderItem/CartModalOrderItem";

const CartModal: React.FC = ({ cart, postRequest, setCart }) => {
  // fixar en totalt på allt man lägger till
  console.log("cart i cartmodalaaaaaaaaaaaaaaaaaa:", cart.antal);

  // console.log("cartinfo....", cart);
  // const priceArray = cart.map((item) => {
  //   return item.price;
  // });
  // const total = priceArray.reduce((acc, current) => acc + current);
  // console.log("ttotal:", total);

  return (
    <section className="cartModal">
      <section className="cartModal__inner-container">
        <h1 className="cartModal__header">Din beställning</h1>
        <div className="cartModal__tip"></div>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => {
              return <CartModalOrderItem key={item.id} item={item} />;
            })}
            <section className="cartModal__wrapper">
              <section className="cartModal__price-section">
                <h2 className="cartModal__lower-header">Total </h2>
                <h2 className="cartModal__dots"></h2>
                <p className="cartModal__price">price sen....</p>
              </section>
              <p className="cartModal__extra-info-secction">
                inkl moms + drönarleverans
              </p>
              <section className="cartModal__btn-wrapper">
                <Button
                  onClick={() => {
                    postRequest();
                    setCart([]);
                  }}
                  bgColor={"rgba(47, 41, 38, 1)"}
                  color={" rgba(255, 255, 255, 1)"}
                >
                  Take my money!
                </Button>
              </section>
            </section>
          </>
        ) : (
          "Din kunvagn är tom"
        )}
      </section>
    </section>
  );
};

export default CartModal;
