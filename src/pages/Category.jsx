import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameByGenre, getGenre } from "../lib/game.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Loader } from "../components/Loader/Loader";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";

export const GameGenre = () => {
  const { genreId } = useParams();

  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGenre(genreId).then((genreResponse) => {
      setGenre(genreResponse);
      getGameByGenre(genreId).then((gamesResponse) => {
        setIsLoading(false);
        setGames(gamesResponse);
      });
    });
  }, [genreId]);
  if (isLoading) return <Loader />;
  return (
    <ContentWrap>
      {games.length ? (
        <>
          <h3 className="mb-5 pb-5 text-center text-3xl font-semibold text-white">
            Juegos de {genre.id}
          </h3>
          <ItemListContainer products={games} />
        </>
      ) : (
        <h3 className="mb-5 pb-5 text-center text-3xl font-semibold text-white">
          No hay juegos en esta categoría
        </h3>
      )}
    </ContentWrap>
  );
};