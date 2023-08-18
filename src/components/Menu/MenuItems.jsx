import { NavLink } from "react-router-dom";

const genres = [
  { id: "xvRiUDGYftA2bz5KoJJw", name: "Accion" },
  { id: "EwzZfzbhG8onSmdYKzeI", name: "Aventura" },
  { id: "gDBEnyHsgsdEzU7VlDR9", name: "Simulador" },
  { id: "XskLI9Uife9HFOKc18TM", name: "Carrera" },
];

const MenuList = () => {
  return (
    <ul className="flex items-center gap-6">
      {genres.map((genre) => (
        <NavLink
          key={genre.id}
          to={`/genre/${genre.id}`}
          className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
        >
          {genre.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default MenuList;