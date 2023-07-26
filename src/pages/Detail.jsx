import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getLure } from "../lib/lure.requests";
import { useParams  } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [lure, setLure] = useState({});


  useEffect(() => {
    getLure(+id).then((res) => {
      setLure(res);
    });
  }, []);

  if(!Object.keys(lure).length) return

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={lure.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{lure.title} </span>

          <p className="detail__info-description">{lure.description}</p>

          <span className="detail__info-price">
            $
            {(lure.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan solo {lure.stock} copias!</span>

          <ItemCount stock={lure.stock} onAdd={() => alert("¿Desea seguir comprando? S/N")} />
        </div>
      </div>
    </div>
  );
};
