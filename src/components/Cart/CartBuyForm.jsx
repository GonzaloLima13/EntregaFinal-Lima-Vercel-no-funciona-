import { useForm } from "react-hook-form";
import { useCartContext } from "../../state/Cart.context";
import { FormErrorsMessage } from "./FormErrorsMessage";
import { addOrder } from "../../lib/orders.request";
import { updateGames } from "../../lib/game.requests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartBuyForm = () => {
  const { cart, getTotalPriceGames, cleanCart } =
    useCartContext();

  const disabledButton = cart.length === 0 ? 'opacity-[0.4]' : 'hover:bg-blue-800 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    watch,
  } = useForm();
  const createOrder = async (nombre, telefono, email) => {
    const items = cart.map(({ id, title, cantidad, price }) => ({
      id,
      title,
      cantidad,
      price,
    }));
   
    if(items.length === 0){
      toast.warn(`No existen productos en el carrito`, {
        className: "bg-slate-500",
        progressClassName: "bg-sky-500",
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return new Promise((resolve, reject) => {
        reject('Primero debes agregar un producto al carrito.')
      })
    }
    const order = {
      buyer: { nombre, telefono, email },
      items,
      total: getTotalPriceGames,
    };

    const { id } = await addOrder(order);
    await updateGames(items);
    cleanCart();

    return id;
  };

  const onSubmit = handleSubmit(async (data) => {
    const { telefono, nombre, email, apellido } = data;
    const id = await toast.promise(
      createOrder(nombre, telefono, email, apellido),
      {
        pending: "Creando orden...",
        success: "Orden creada",
        error: "Orden rechazada",
      },
      {
        className: "bg-slate-500",
        theme: "dark",
      }
    );

    if(id){
      toast(`Tu orden es: ${id}`, {
        className: "bg-slate-500",
        progressClassName: "bg-sky-500",
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      resetField("nombre")
      resetField("apellido")
      resetField("email")
      resetField("email2")
      resetField("telefono")
    }

  });

  return (
    <form
      noValidate
      className="mx-auto w-full sm:w-1/2 md:w-1/3"
      onSubmit={onSubmit}
    >
      <div className="group relative z-0 mb-3 w-full border-solid border-2 border-sky-800">
        <input
          type="text"
          name="floating_nombre"
          autoComplete="off"
          aria-autocomplete="off"
          id="nombre"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-3 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 dark:border-gray-600 dark:text-white dark:focus:border-blue-300"
          placeholder=" "
          {...register("nombre", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
              message: "El nombre solo puede contener letras y espacios",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El nombre debe tener como máximo 20 caracteres",
            },
          })}
        />
        <label
          htmlFor="floating_nombre"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Nombre
        </label>
        {errors.nombre && <FormErrorsMessage message={errors.nombre.message} />}
      </div>
      <div className="group relative z-0 mb-6 w-full border-solid border-2 border-sky-800">
        <input
          autoComplete="off"
          aria-autocomplete="off"
          type="text"
          name="floating_apellido"
          id="apellido"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          {...register("apellido", {
            required: {
              value: true,
              message: "El apellido es requerido",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
              message: "El apellido solo puede contener letras y espacios",
            },
            minLength: {
              value: 2,
              message: "El apellido debe tener como mínimo 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El apellido debe tener como máximo 20 caracteres",
            },
          })}
        />
        <label
          htmlFor="floating_apellido"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Apellido
        </label>
        {errors.apellido && (
          <FormErrorsMessage message={errors.apellido.message} />
        )}
      </div>
      <div className="group relative z-0 mb-6 w-full border-solid border-2 border-sky-800">
        <input
          type="email"
          name="floating_email"
          autoComplete="off"
          aria-autocomplete="off"
          id="email"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          {...register("email", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "El correo no es válido",
            },
          })}
        />
        <label
          htmlFor="floating_email"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Email
        </label>
        {errors.email && <FormErrorsMessage message={errors.email.message} />}
      </div>
      <div className="group relative z-0 mb-6 w-full border-solid border-2 border-sky-800">
        <input
          autoComplete="off"
          aria-autocomplete="off"
          type="email"
          name="floating_email2"
          id="email2"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          {...register("email2", {
            required: {
              value: true,
              message: "Confirmar email es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "El correo no es válido",
            },
            validate: (value) => {
              return value === watch("email") || "Los correos no coinciden";
            },
          })}
        />
        <label
          htmlFor="floating_email2"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Confirmar email
        </label>
        {errors.email2 && <FormErrorsMessage message={errors.email2.message} />}
      </div>
      <div className="group relative z-0 mb-6 w-full border-solid border-2 border-sky-800">
        <input
          autoComplete="off"
          aria-autocomplete="off"
          type="tel"
          name="telefono"
          id="telefono"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          {...register("telefono", {
            required: {
              value: false,
            },
            pattern: {
              value: /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
              message: "Teléfono no válido",
            },
          })}
        />
        <label
          htmlFor="telefono"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Teléfono (No requerido)
        </label>
        {errors.telefono && (
          <FormErrorsMessage message={errors.telefono.message} />
        )}
      </div>
      <button
        type="submit"
        className={`w-full rounded-lg bg-blue-700 dark:bg-blue-600 ${disabledButton} px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto `}
        disabled={cart.length === 0}
      > 
        Comprar
      </button>
      <ToastContainer />
    </form>
  );
};