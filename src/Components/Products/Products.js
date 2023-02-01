import ListItem from "../ListItems/ListItem";
const Products = () => {
  const item = [
    {
      id: 1,
      discountPrice: 340,
      price: 450,
      title: "Title of the Item",
      thumbbnail: "placeholder.png",
    },
    {
      id: 2,
      discountPrice: 340,
      price: 450,
      title: "Title of the Item",
      thumbbnail: "placeholder.png",
    },
  ];
  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        <ListItem data={item[0]} />
        <ListItem data={item[1]} />
      </div>
    </div>
  );
};

export default Products;
