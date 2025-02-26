import "./CartModalOrderItem.css";

const CartModalOrderItem = ({ item }) => {
  return (
    <section className="order-item">
      <section className="order-item__wrapper">
        <h1 className="order-item__type">{item.title}</h1>
        <h1 className="order-item__dots"></h1>
      </section>
      <p className="order-item__price">{item.price}</p>
    </section>
  );
};

export default CartModalOrderItem;
