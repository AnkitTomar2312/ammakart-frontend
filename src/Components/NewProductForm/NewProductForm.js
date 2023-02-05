import "../NewProductForm/NewProductForm.css";
import ListItem from "../ListItems/ListItem";
import { useState } from "react";
const NewProductForm = () => {
  const [item, setItem] = useState({
    id: 1,
    title: "Title of the Item",
    price: 0,
    discount: 0,
    thumbnail: "placeholder.png",
  });

  const handelSubmit = (event) => {
    event.preventDefault();
    if (item.discount < item.price) {
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

          <label htmlFor="discount">Discount</label>
          <input
            name="discount"
            type={"number"}
            id="discount"
            placeholder="Enter Discount..."
            onChange={handelInput}
            value={item.discount}
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

          <button>Update</button>
        </form>
      </div>

      <div>
        <ListItem data={item} />
      </div>
    </div>
  );
};

export default NewProductForm;
