import { useNavigate } from "react-router-dom";

export const Item = ({ id, title, category, price, img }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${id}`)}
      className="flex flex-col max-w-md overflow-hidden w-full bg-sky-700 hover:bg-slate-800/40 transition-all ease-in-out hover:scale-125 duration-[0.3s] rounded-sm"
    >
      <img src={img} alt="Imagen del juego" className="w-full h-auto" />
      <div className="py-2 px-4 flex-[1]">
        <h3 className="font-bold text-white text-sm mb-1">{title}</h3>
        <p className="font-bold text-xs text-slate-100/50">{category}</p>
      </div>
      <div className="px-4 pb-4">
        <p className="font-bold text-white text-xl mt-auto">
          <span className="font-bold">UYU</span>{" "}
          {new Intl.NumberFormat("es-UY", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }).format(price)}
        </p>
      </div>
    </div>
  );
};