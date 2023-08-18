import { CartBuyForm } from "../components/Cart/CartBuyForm.jsx";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";
import { useCartContext } from "../state/Cart.context";

export const Cart = () => {
  const { cart, getTotalPriceGames, removeProduct, getTotalItems, cleanCart } =
    useCartContext();

  return (
    <ContentWrap>
      <h3 className="text-3xl font-semibold text-center text-white p-5 mb-2">Carrito</h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-5 py-3">
                Nombre
              </th>
              <th scope="col" className="px-5 py-3">
                Precio
              </th>
              <th scope="col" className="px-5 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-5 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-5 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((game) => {
                return (
                  <tr
                    key={game.id}
                    className="border-b hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {game.title}
                    </th>
                    <td className="px-5 py-4">
                      ${game.price.toLocaleString("es-CL")}
                    </td>
                    <td className="px-5 py-4">{game.cantidad}</td>
                    <td className="px-5 py-4">
                      ${(game.price * game.cantidad).toLocaleString("es-UY")}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span
                        onClick={() => removeProduct(game.id)}
                        className="font-semibold text-red-600 hover:underline dark:text-red-500 hover:cursor-pointer"
                      >
                        Remover
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-b w-full items-center hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
                <th
                  colSpan={6}
                  scope="row"
                  className="whitespace-nowrap text-center px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  No hay juegos en el carrito
                </th>
              </tr>
            )}
          </tbody>
          <tfoot className="text-md bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" colSpan={2} className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-5 py-3">{getTotalItems}</td>
              <td className="px-5 py-3">
                ${getTotalPriceGames.toLocaleString("es-CL")}
              </td>
              <td className="px-5 py-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-end p-8">
        <button onClick={() => cleanCart()} className="px-4 py-2 bg-red-500 rounded-lg text-md font-semibold text-white hover:bg-red-500">
          Vaciar
        </button>
      </div>
      
      <CartBuyForm />
    </ContentWrap>
  );
};