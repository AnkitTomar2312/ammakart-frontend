import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/Layouts/Header";
import SubHeader from "./Components/Layouts/SubHeader";
// import NewProductForm from "./Components/NewProductForm/NewProductForm";
// import Login from "./Components/LogIn/Login";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: "",
  });
  const handelAddItem = (item) => {
    let items = [...cartItem];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItem([...items]);
    // setCartItem(cartItem + 1);
  };
  const handelRemoveItem = (item) => {
    let items = [...cartItem];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItem([...items]);
    //setCartItem(cartItem - 1);
  };
  //type ===-1, decrese
  //type ===1 , increase
  const handelEventQueue = (id, type) => {
    console.log({ id, type });
    setEventQueue({
      id,
      type,
    });
  };

  return (
    <div className="App">
      <Header
        count={cartItem.length}
        items={cartItem}
        onhandelEvent={handelEventQueue}
      />
      <SubHeader />
      <Products
        onAddItem={handelAddItem}
        onRemoveItem={handelRemoveItem}
        eventState={eventQueue}
      />
      {/* <NewProductForm />``
      <Login /> */}
    </div>
  );
}

export default App;
