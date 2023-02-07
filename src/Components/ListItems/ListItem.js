import { useState } from "react";
import AddToCart from "../../assets/icons/add_cart.svg";
const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setMessage("Added to the cart !!");
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const [message, setMessage] = useState("Not added to the cart !!");

  return (
    <div className="item-card">
      <img
        className="img-fluid"
        src={`/assets/${data.thumbnail}`}
        alt={data.thumbnail}
      />
      <div className="item-card__information">
        <div className="pricing">
          <span>{data.discount}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <div className="title">
          <h3>{data.title}</h3>
        </div>
      </div>
      <small className="cart-message">{message}</small>
      {counter < 1 ? (
        <button className="cart-add" onClick={increaseCounter}>
          <span>Add to cart</span>
          <img src={AddToCart} alt="cart-img" />
        </button>
      ) : (
        <div className="cart-addon">
          <button onClick={decreaseCounter}>
            <span>-</span>
          </button>
          <span>{counter}</span>
          <button onClick={increaseCounter}>
            <span>+</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
