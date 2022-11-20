import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/nav-bar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Shop } from "./pages/shop/Shop";
import { Contacts } from "./pages/contacts/Contacts";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="backGroundImage" />
      <div style={{ marginBottom: "78px" }} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// comment
