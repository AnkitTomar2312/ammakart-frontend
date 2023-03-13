import { useState, useEffect } from "react";
import ListItem from "../ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";

//
const Products = ({ onAddItem, onRemoveItem, eventState }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  //calling data from the fireBase using axios
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
        //setLoader(false);
        setItems(transformData);
      } catch (error) {
        //setLoader(false);
        console.log("Errro: ", error);
        alert("Some error occured");
      } finally {
        setLoader(false);
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

  useEffect(() => {
    if (eventState.id > -1) {
      if (eventState.type === -1) {
        handelRemoveItem(eventState.id);
      } else if (eventState.type === 1) {
        handelAddItem(eventState.id);
      }
    }
  }, [eventState]);

  const handelAddItem = (id) => {
    let data = [...items];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItems([...data]);
    onAddItem(data[index]);

    // let index = presentItem.indexOf(id);
    // if (index > -1) {
    //   return;
    // }
    // setPresentItem([...presentItem, id]);
    // onAddItem();
  };

  const handelRemoveItem = (id) => {
    let data = [...items];
    let index = data.findIndex((i) => i.id === id);
    if (data[index.quantity] !== 0) {
      data[index].quantity -= 1;
      setItems([...data]);
      onRemoveItem(data[index]);
    }
    // let index = presentItem.indexOf(id);
    // if (index > -1) {
    //   let item = [...presentItem];
    //   item.splice(index, 1);
    //   setPresentItem([...item]);
    //   onRemoveItem();
    // }
  };

  return (
    <>
      <div className="product-list">
        <div className="product-list--wrapper">
          {items.map((item) => {
            return (
              <ListItem
                onAdd={handelAddItem}
                onRemove={handelRemoveItem}
                data={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
