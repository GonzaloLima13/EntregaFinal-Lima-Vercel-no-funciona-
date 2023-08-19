import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const Generos = () => {
  const [genres, setGenres] = useState([]); 

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "genres"));
        const genresData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGenres(genresData); 
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres(); 
  }, []);

  return (
    <ul className="flex items-center gap-6">
      {genres.map((genre) => (
        <NavLink
          key={genre.id}
          to={`/genres/${genre.id}`}
          className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
        >
          {genre.id}
        </NavLink>
      ))}
    </ul>
  );
};

export default Generos;