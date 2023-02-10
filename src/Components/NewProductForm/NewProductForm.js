import "../NewProductForm/NewProductForm.css";
import ListItem from "../ListItems/ListItem";
import { useState } from "react";
const NewProductForm = () => {
  const [item, setItem] = useState({
    id: 1,
    title: "Title of the Item",
    price: 0,
    discountedPrice: 0,
    thumbnail: "placeholder.png",
  });

  const handelSubmit = (event) => {
    event.preventDefault();
    if (item.discountedPrice > item.price) {
      alert("Can't give Discount greater than Price");
    }
  };

  const handelInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="NewProductForm-Wrapper">
      <div className="form-wrapper">
        <h2>Enter Item Detail</h2>
        <form onSubmit={handelSubmit}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type={"text"}
            id="title"
            placeholder="Enter Title..."
            onChange={handelInput}
            value={item.title}
          ></input>

          <label htmlFor="price">Price</label>
          <input
            name="price"
            type={"number"}
            id="price"
            placeholder="Enter Price..."
            onChange={handelInput}
            value={item.price}
          ></input>

          <label htmlFor="discountedPrice">Discount Price</label>
          <input
            name="discountedPrice"
            type={"number"}
            id="discount"
            placeholder="Enter Discount Price..."
            onChange={handelInput}
            value={item.discountedPrice}
          ></input>

          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            name="thumbnail"
            type={"text"}
            id="thumbnail"
            placeholder="Enter Thumbnail..."
            onChange={handelInput}
            value={item.thumbnail}
          ></input>

          <button onClick={handelInput}>Update</button>
        </form>
      </div>

      <div>
        <ListItem data={item} />
      </div>
    </div>
  );
};

export default NewProductForm;
