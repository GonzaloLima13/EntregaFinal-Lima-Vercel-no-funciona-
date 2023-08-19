import { CartWidget } from "../CartWidget/CartWidget";
import { Outlet } from "react-router-dom";
import Generos from "../Generos/Generos";
import Logotipo from "./Logotipo";

export const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700 p-2 shadow-md">
        <Logotipo />
        <Generos />
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
