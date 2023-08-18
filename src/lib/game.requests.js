import { getDocs, collection, getDoc, doc, addDoc, writeBatch, increment } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const gamesRef = collection(db, "Items");

export const getGenre = async (genreId) => {
  const genreDocument = doc(db, "genres", genreId);
  const genreDocSnapshot = await getDoc(genreDocument);
  if (genreDocSnapshot.exists())
    return { id: genreDocSnapshot.id, ...genreDocSnapshot.data() };

  return null;
};

export const getGames = async () => {
  let games = [];
  const querySnapshot = await getDocs(gamesRef);
  querySnapshot.forEach((doc) => {
    games = [...games, { ...doc.data(), id: doc.id }];
  });
  return games;
};

export const getGameById = async (id) => {
  const itemsDocument = doc(db, "Items", id);
  const itemsDocSnapshot = await getDoc(itemsDocument);
  if (itemsDocSnapshot.exists()) {
    let game = { id: itemsDocSnapshot.id, ...itemsDocSnapshot.data() };
    return game;
  }

  return null;
};

export const getGameByGenre = async (genreId) => {
  let gamesGenre = await getGames()
  const games = gamesGenre.filter((game) => {
    return game.genres.some(genre => genreId === genre.id)
  });
  return games;
};

export const updateGames = async (items) => {

  const batch = writeBatch(db)

  items.forEach(({id, cantidad}) => {
    batch.update(doc(db,'Items',id), {
      stock: increment(-cantidad)
    })
  })

  batch.commit()
};
