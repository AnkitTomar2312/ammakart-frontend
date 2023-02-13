import { Fragment, useState } from "react";
import AddToCart from "../../assets/icons/add_cart.svg";
import Modal from "../UI/Modal";
const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const increaseCounter = (event) => {
    event.stopPropagation(); //stoping modal from bubble up when clicked on card
    setMessage("Added to the cart !!");
    setCounter(counter + 1);
  };
  const decreaseCounter = (event) => {
    event.stopPropagation();
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const handelModal = () => {
    setShowModal((previousState) => !previousState);
  };
  const [message, setMessage] = useState("Not added to the cart !!");

  return (
    <Fragment>
      <div onClick={handelModal} className="item-card">
        <img
          className="img-fluid"
          src={`/assets/${data.thumbnail}`}
          alt={data.thumbnail}
        />
        <div className="item-card__information">
          <div className="pricing">
            <span>{data.discountedPrice}</span>
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
      {showModal && (
        <Modal onClose={handelModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className="img-fluid"
                src={`/assets/${data.thumbnail}`}
                alt={data.thumbnail}
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className="pricing">
                <span>{data.discountedPrice}</span>
                <small>
                  <strike>{data.price}</strike>
                </small>
                <p>{data.description}</p>
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
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default ListItem;
