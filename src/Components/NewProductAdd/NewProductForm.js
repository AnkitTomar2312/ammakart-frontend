import { useState } from "react";
import ListItem from "../ListItems/ListItem";
import "../NewProductAdd/newProduct.css";

const NewProductAdd = () => {
  const [title, setTitle] = useState("");
  const [ProductPic, setProductPic] = useState("");
  const [Price, setPrice] = useState("");
  const [DiscountPrice, setDiscountPrice] = useState("");
  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelThubnail = (e) => {
    setProductPic(e.target.value);
  };
  const handelPrice = (e) => {
    setPrice(e.target.value);
  };
  const handelDiscount = (e) => {
    setDiscountPrice(e.target.value);
  };
  const newData = {
    title: "Hello",
    thumbnail: "This is image",
    price: "450",
    discountPrice: "1720",
  };
  return (
    <div className="new-product-add-form">
      <div className="product-data">
        <form className="new-product">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title..."
            onChange={handelTitle}
            value={title}
          ></input>
          <label>Picture of Product</label>
          <input
            type="text"
            placeholder="Choose Product Picture..."
            onChange={handelThubnail}
            value={ProductPic}
          ></input>
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter Price..."
            onChange={handelPrice}
            value={Price}
          ></input>
          <label>Discount Price</label>
          <input
            type="number"
            placeholder="Enter Discount Price..."
            onChange={handelDiscount}
            value={DiscountPrice}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      <ListItem data={newData} />
    </div>
  );
};

export default NewProductAdd;
