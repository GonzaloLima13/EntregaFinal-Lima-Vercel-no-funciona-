import React, { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_Product":
      const existingProduct = state.find((item) => item.id === action.payload.item.id);
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, cantidad: item.cantidad + action.payload.cantidad }
            : item
        );
      } else {
        return [...state, { ...action.payload.item, cantidad: action.payload.cantidad }];
      }
    case "Remove_Product":
      return state.filter((item) => item.id !== action.payload.id);
    case "Clean_Cart":
      return [];
    default:
      return state;
  }
};

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const searchProduct = (id) => {
    return cart.find((item) => item.id === id);
  };

  const cantidadProduct = (id) => {
    return searchProduct(id)?.cantidad || 0;
  };

  const addProduct = (item, cantidad) => {
    dispatch({
      type: "Add_Product",
      payload: { item, cantidad },
    });
  };

  const removeProduct = (id) => {
    dispatch({
      type: "Remove_Product",
      payload: { id },
    });
  };

  const cleanCart = () => {
    dispatch({ type: "Clean_Cart" });
  };

  const getTotalPriceGames = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.cantidad, 0),
    [cart]
  );

  const getTotalItems = useMemo(() => cart.reduce((acc, item) => acc + item.cantidad, 0), [cart]);

  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    searchProduct,
    cantidadProduct,
    getTotalPriceGames,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};