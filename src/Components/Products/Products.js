import { useState, useEffect } from "react";
import ListItem from "../ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";
const Products = () => {
  const [items, setItems] = useState([]);
  //calling data from the fireBase
  useEffect(() => {
    //creating a async function:
    async function fetchItem() {
      try {
        const response = await axios.get(
          "https://ammakart-54d03-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
        );
        const data = response.data;
        const transformData = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setItems(transformData);
      } catch (error) {
        console.log("Errro: ", error);
        alert("Some error occured");
      }
    }
    fetchItem();

    //calling firebase using the fetch API
    // fetch(
    //   `https://ammakart-54d03-default-rtdb.asia-southeast1.firebasedatabase.app/items.json`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //using AXIOS npm install axios
    // axios
    //   .get(
    //     "https://ammakart-54d03-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    //   )
    //   .then((response) => {
    //     const data = response.data;
    //     const transformData = data.map((item, index) => {
    //       return {
    //         ...item,
    //         id: index,
    //       };
    //     });
    //     setItems(transformData);
    //    // console.log(transformData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>
      <div className="product-list">
        <div className="product-list--wrapper">
          {/* <ListItem data={items[0]} />
        <ListItem data={items[1]} /> */}
          {items.map((item) => {
            return <ListItem data={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* <Loader /> */}
    </>
  );
};

export default Products;
