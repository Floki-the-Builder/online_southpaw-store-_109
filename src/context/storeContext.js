import React from "react";

//  context desctibe the data and func that will exist in the storeContext
//  this contains

const StoreContext = React.createContext({
  // is imutable
  cart: [],
  user: {},

  //   functions to help modify
  addProduct: () => {},
  removeProduct: () => {},
});

export default StoreContext;
