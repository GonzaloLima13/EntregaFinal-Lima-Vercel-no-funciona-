import React, { useState, useEffect } from "react";
import { getGames } from "../lib/game.requests";
import { Loader } from "../components/Loader/Loader";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import ContentWrap from "../components/ContentWrap/ContentWrap";
import CartTotal from '../components/CartTotal/CartTotal';
import { useCartContext } from '../state/Cart.context'; //

export const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cart } = useCartContext(); // Accede al contexto del carrito
  const [total, setTotal] = useState(0); // Estado local para el total

  useEffect(() => {
    getGames().then((res) => {
      setIsLoading(false);
      setGames(res);
    });
  }, []);

  useEffect(() => {
    // Calcula el total a medida que los productos se agregan o quitan del carrito
    const updatedTotal = cart.reduce((acc, product) => acc + product.price * product.cantidad, 0);
    setTotal(updatedTotal);
  }, [cart]);

  if (isLoading) return <Loader />;

  return (
    <ContentWrap>
      <ItemListContainer products={games} />
      
      {CartTotal}
      <CartTotal total={total} />
    </ContentWrap>
  );
};