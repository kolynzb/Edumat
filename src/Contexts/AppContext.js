import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    getProducts();
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("my-cart-list");
    if (data) {
      setCart(JSON.parse(data));
    }
    const data2 = localStorage.getItem("my-user-list");
    if (data2) {
      setCart(JSON.parse(data2));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-cart-list", JSON.stringify(cart));
    localStorage.setItem("my-user-list", JSON.stringify(user));
  });

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setIsLoaded(true);
  };

  const checkProdInCart = (prodId) => {
    return cart.some(function (prod) {
      return prod.productId === prodId;
    });
  };

  const addToCart = (productID, productQty, productPrice) => {
    setCart((cart) => [
      ...cart,
      { productId: productID, quantity: productQty, price: productPrice },
    ]);
  };

  const removeFromCart = (productID) => {
    setCart(cart.filter((prod) => prod.productId !== productID));
  };

  const login = (productID, username, email, password) => {
    setCart((cart) => [...cart, { username, email, password }]);
  };

  const logout = (productID) => {
    setCart(user.filter((prod) => prod.productId !== productID));
  };

  const removeFromCartPage = (productID) => {
    setCart(cart.filter((prod) => prod.productId !== productID));
    console.log(cart);
  };

  return (
    <AppContext.Provider
      value={{
        isLoaded,
        products,
        cart,
        user,
        checkProdInCart,
        addToCart,
        removeFromCart,
        removeFromCartPage,
        login,
        logout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
