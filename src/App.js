import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import RegisterPage from "./pages/RegisterPage";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import AppContextProvider from "./Contexts/AppContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <BackToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="admin" element={<Admin />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
