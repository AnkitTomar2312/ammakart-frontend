import { useState } from "react";
import AddToCart from "../../assets/icons/add_cart.svg";
const ListItem = ({ data }) => {
  const [message, setMessage] = useState("Not added to the cart !!");
  const handelCartMessage = () => {
    setMessage("Added to the cart !!");
  };
  return (
    <div className="item-card">
      <img
        className="img-fluid"
        src={`/assets/${data.thumbbnail}`}
        alt={data.thumbnail}
      />
      <div className="item-card__information">
        <div className="pricing">
          <span>{data.discountPrice}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <div className="title">
          <h3>{data.title}</h3>
        </div>
      </div>
      <small className="cart-message">{message}</small>
      <button className="cart-add" onClick={handelCartMessage}>
        <span>Add to cart</span>
        <img src={AddToCart} alt="cart-img" />
      </button>
    </div>
  );
};

export default ListItem;
