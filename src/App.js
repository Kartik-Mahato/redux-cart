import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux';
import { reducer } from "./reducer/reducer";

import { Provider } from 'react-redux';

// initial state
const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0
}



// store
const store = createStore(reducer, initialState);


function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
