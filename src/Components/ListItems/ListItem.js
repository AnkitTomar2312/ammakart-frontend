import AddToCart from "../../assets/icons/add_cart.svg";
const ListItem = ({ data }) => {
  return (
    <div className="item-card">
      <img
        className="img-fluid"
        src={`/assets/${data.thumbbnail}`}
        alt={data.title}
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
      <button className="cart-add">
        <span>Add to cart</span>
        <img src={AddToCart} alt="cart-img" />
      </button>
    </div>
  );
};

export default ListItem;
