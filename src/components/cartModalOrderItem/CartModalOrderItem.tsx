import "./CartModalOrderItem.css";

const CartModalOrderItem = () => {
  return (
    <section className="order-item">
      <section className="order-item__wrapper">
        <h1 className="order-item__type">Bryggkaffe</h1>
        <h1 className="order-item__dots"></h1>
      </section>
      <p className="order-item__price">49 kr</p>
    </section>
  );
};

export default CartModalOrderItem;
