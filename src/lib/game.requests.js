import {
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
  writeBatch,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const gamesCollection = collection(db, "Items");
const genresCollection = collection(db, "genres");

export const getGenre = async (genreId) => {
  const genreDocRef = doc(genresCollection, genreId);
  const genreDocSnapshot = await getDoc(genreDocRef);

  if (genreDocSnapshot.exists()) {
    return { id: genreDocSnapshot.id, ...genreDocSnapshot.data() };
  }

  return null;
};

export const getGames = async () => {
  const querySnapshot = await getDocs(gamesCollection);
  const games = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return games;
};

export const getGameById = async (id) => {
  const gameDocRef = doc(gamesCollection, id);
  const gameDocSnapshot = await getDoc(gameDocRef);

  if (gameDocSnapshot.exists()) {
    const gameData = gameDocSnapshot.data();
    const genreId = gameData.genre.id;
    const genreData = await getGenre(genreId);

    return {
      id: gameDocSnapshot.id,
      ...gameData,
      genre: genreData,
    };
  }

  return null;
};

export const getGameByGenre = async (genreId) => {
  const games = await getGames();
  const gamesByGenre = games.filter((game) => game.genre.id === genreId);
  
  return gamesByGenre;
};

export const updateGames = async (Items) => {
  const batch = writeBatch(db);

  Items.forEach(({ id, cantidad }) => {
    const gameDocRef = doc(gamesCollection, id);
    batch.update(gameDocRef, {
      stock: increment(-cantidad),
    });
  });

  await batch.commit();
};

