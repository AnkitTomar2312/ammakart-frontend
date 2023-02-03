import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/Layouts/Header";
import SubHeader from "./Components/Layouts/SubHeader";
import NewProductAdd from "./Components/NewProductAdd/NewProductForm";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <SubHeader />
      <Products /> */}
      <NewProductAdd />
    </div>
  );
}

export default App;
