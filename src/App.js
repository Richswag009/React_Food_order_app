import { useState } from "react";
import "./App.css";
import CartProvider from "./Store/CartProvider";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
