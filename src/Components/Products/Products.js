import { useState } from "react";
import ListItem from "../ListItems/ListItem";
const Products = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      discount: 340,
      price: 450,
      title: "Title of the Item",
      thumbnail: "placeholder.png",
    },
    {
      id: 2,
      discount: 340,
      price: 450,
      title: "Title of the Item",
      thumbnail: "placeholder.png",
    },
    {
      id: 3,
      discount: 340,
      price: 450,
      title: "Title of the Item",
      thumbnail: "placeholder.png",
    },
  ]);
  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        {/* <ListItem data={items[0]} />
        <ListItem data={items[1]} /> */}
        {items.map((item) => {
          return <ListItem data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
