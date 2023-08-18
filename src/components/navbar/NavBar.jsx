import { CartWidget } from "../CartWidget/CartWidget";
import { Outlet } from "react-router-dom";
import MenuItems from "../Menu/MenuItems";
import Logito from "./Logito";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-between bg-slate-900 p-3 shadow-md">
        <Logito />
        <MenuItems />
        <CartWidget />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
