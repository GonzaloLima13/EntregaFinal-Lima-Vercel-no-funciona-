import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const searchProduct = (id) => {
    return cart.find((game) => game.id === id)
  }

  const cantidadProduct  = (id) => {
    return searchProduct(id)?.cantidad ||  0
  }
  // Añadir juegos al carrito
  const addProduct = (item, cantidad) => {
    const elemento =  searchProduct(item.id)
    if (!elemento) return setCart([...cart, { ...item, cantidad }]);
    const newCart = cart.map((game) =>
      game.id === item.id
        ? { ...game, cantidad: game.cantidad + cantidad }
        : game
    );
    setCart(newCart);
  };

  // Eliminar juegos del carrito
  const removeProduct = (id) => {
    const newCart = cart.filter((game)=> game.id !== id )
    setCart(newCart)
  }

  // Limpiar carrito
  const cleanCart = () => setCart([]);

  // Obtener precio total del carrito
  const getTotalPriceGames = useMemo(() =>
    cart.reduce((acc, item) => acc + item.price * item.cantidad, 0), [cart]);

  // Obtener el total de items del carrito
  const getTotalItems = useMemo(() =>
    cart.reduce((acc, item) => acc + item.cantidad, 0),  [cart]);

  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    searchProduct,
    cantidadProduct,
    getTotalPriceGames,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};