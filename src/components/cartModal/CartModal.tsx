import "./cartModal.css";
import Button from "../button/button";
import CartModalOrderItem from "../cartModalOrderItem/CartModalOrderItem";
import { Item } from "../../types";
// import { useEffect } from "react";

type CartModalProps = {
  cart: Item[];
};
const CartModal: React.FC<CartModalProps> = ({ cart }) => {
  // fixar en totalt på allt man lägger till
  console.log("cart i cartmodal:", cart);

  console.log("cartinfo....", cart);
  const priceArray = cart.map((item) => {
    return item.price;
  });
  const total = priceArray.reduce((acc, current) => acc + current);
  console.log("ttotal:", total);

  // Asynkron funktion för att skapa en användare
  const postRequest = async () => {
    //måste få in cart här....
    //
    // const postCart = {
    //   details: {
    //     order: [
    //       {
    //         name: "Bryggkaffe",
    //         price: 39,
    //       },
    //     ],
    //   },
    // };

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
      console.log(data);

      if (!response.ok) {
        // Hantera eventuella fel här om svaret inte var ok
        throw new Error(`Error: ${data.message || "Something went wrong"}`);
      }

      console.log("User created successfully:", data); // Hantera den skapade användaren
    } catch (error) {
      console.error("Error creating user:", error); // Hantera fel om något går fel
    }
  };

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
                <p className="cartModal__price">{total}</p>
              </section>
              <p className="cartModal__extra-info-secction">
                inkl moms + drönarleverans
              </p>
              <section className="cartModal__btn-wrapper">
                <Button
                  onClick={postRequest}
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
