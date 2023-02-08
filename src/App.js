import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/Layouts/Header";
import SubHeader from "./Components/Layouts/SubHeader";
import NewProductForm from "./Components/NewProductForm/NewProductForm";
import Login from "./Components/LogIn/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Products />
      <NewProductForm />
      <Login />
    </div>
  );
}

export default App;
