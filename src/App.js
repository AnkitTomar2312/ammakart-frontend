import "./App.css";
import Products from "./Components/Products/Products";
import Header from "./Components/Layouts/Header";
import SubHeader from "./Components/Layouts/SubHeader";
function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Products />
    </div>
  );
}

export default App;
