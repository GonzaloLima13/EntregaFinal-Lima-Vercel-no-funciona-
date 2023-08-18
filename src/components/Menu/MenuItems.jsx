import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="flex items-center gap-6">
      <NavLink
        to={"/genre/xvRiUDGYftA2bz5KoJJw"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Accion
      </NavLink>
      <NavLink
        to={"/genre/EwzZfzbhG8onSmdYKzeI"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Aventura
      </NavLink>
      <NavLink
        to={"/genre/gDBEnyHsgsdEzU7VlDR9"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Simulador
      </NavLink>
      <NavLink
        to={"/genre/XskLI9Uife9HFOKc18TM"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Carrera
      </NavLink>
    </ul>
  );
};

export default MenuList;
