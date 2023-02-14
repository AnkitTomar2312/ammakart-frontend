import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/Layouts/Header";
import SubHeader from "./Components/Layouts/SubHeader";
import NewProductForm from "./Components/NewProductForm/NewProductForm";
import Login from "./Components/LogIn/Login";
import { useState } from "react";
function App() {
  const [cartItem, setCartItem] = useState(0);

  const handelAddItem = () => {
    setCartItem(cartItem + 1);
  };
  const handelRemoveItem = () => {
    setCartItem(cartItem - 1);
  };
  return (
    <div className="App">
      <Header count={cartItem} />
      <SubHeader />
      <Products onAddItem={handelAddItem} onRemoveItem={handelRemoveItem} />
      {/* <NewProductForm />
      <Login /> */}
    </div>
  );
}

export default App;
