// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getGameById } from "../lib/game.requests";
// import { Loader } from "../components/Loader/Loader";
// import { ItemCount } from "../components/ItemCount/ItemCount";
// import ContentWrap from "../components/ContentWrap/ContentWrap";
// import { useCartContext } from "../state/Cart.context";

// export const Detail = () => {
//   const { id } = useParams();
//   const [game, setGame] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   const { addProduct, cantidadProduct } = useCartContext();

//   const handleAddProduct = (cantidad) => {
//     addProduct(game, cantidad);
//   };
//   useEffect(() => {
//     getGameById(id).then((res) => {
//       setIsLoading(false);
//       setGame(res);
//     });
//   }, []);

//   if (isLoading) return <Loader />;
//   if(!Object.keys(game).length) return

//   return (
//     <ContentWrap>
//       <div className="container mx-auto pt-5 md:pt-0">
//         <div className="flex flex-col items-center gap-10 md:flex-row">
//           <img
//             src={game.img}
//             alt=""
//             className="mx-auto h-[50%] w-[150px] max-w-[400px] sm:w-[300px]"
//           />
//           <article className="flex w-full flex-col gap-5">
//             <h3 className="mx-auto my-0 p-4 text-2xl font-bold text-white md:text-5xl">
//               {game?.title}
//             </h3>
//             <span className="cursor-pointer font-bold text-slate-100/50 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-800/60 text-center align-middle">
//               {game.category}
//             </span>
//             <div className="p-4 text-justify flex flex-col gap-5">
//               <p className="text-white text-center">{game.description}</p>
//               <p className="font-bold text-white text-2xl text-center">Precio: UYU{game.price.toLocaleString('es-UY')}</p>
//             </div>
//             <ItemCount stock={game.stock - (cantidadProduct(game.id))} onAdd={handleAddProduct} />
//           </article>
//         </div>
//       </div>
//     </ContentWrap>
//   );
// };

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/game.requests";
import { Loader } from "../components/Loader/Loader";
import { ItemCount } from "../components/ItemCount/ItemCount";
import ContentWrap from "../components/ContentWrap/ContentWrap";
import { useCartContext } from "../state/Cart.context";
import CartTotal from '../components/CartTotal/CartTotal';

export const Detail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addProduct, cantidadProduct, cart } = useCartContext(); // Accedo al contexto del carrito
  const [total, setTotal] = useState(0); // Estado local para el total

  const handleAddProduct = (cantidad) => {
    addProduct(game, cantidad);
  };

  useEffect(() => {
    getGameById(id).then((res) => {
      setIsLoading(false);
      setGame(res);
    });
  }, []);

  useEffect(() => {
    // Calcula el total a medida que los productos se agregan o quitan del carrito
    const updatedTotal = cart.reduce((acc, product) => acc + product.price * product.cantidad, 0);
    setTotal(updatedTotal);
  }, [cart]);

  if (isLoading) return <Loader />;
  if (!Object.keys(game).length) return null;

  return (
    <ContentWrap>
      <div className="container mx-auto pt-5 md:pt-0">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <img
            src={game.img}
            alt=""
            className="mx-auto h-[50%] w-[150px] max-w-[400px] sm:w-[300px]"
          />
          <article className="flex w-full flex-col gap-5">
            <h3 className="mx-auto my-0 p-4 text-2xl font-bold text-white md:text-5xl">
              {game?.title}
            </h3>
            <span className="cursor-pointer font-bold text-slate-100/50 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-800/60 text-center align-middle">
              {game.category}
            </span>
            <div className="p-4 text-justify flex flex-col gap-5">
              <p className="text-white text-center">{game.description}</p>
              <p className="font-bold text-white text-2xl text-center">Precio: UYU{game.price.toLocaleString('es-UY')}</p>
            </div>
            <ItemCount stock={game.stock - (cantidadProduct(game.id))} onAdd={handleAddProduct} />
          </article>
        </div>
      </div>

      {CartTotal}
      <CartTotal total={total} />
    </ContentWrap>
  );
};