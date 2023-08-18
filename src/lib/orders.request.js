import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const ordersRef = collection(db, 'orders');

const addOrder = async (order) => {
  try {
    const orderDocRef = await addDoc(ordersRef, order);
    const createdOrder = { ...order, id: orderDocRef.id };
    return createdOrder;
  } catch (error) {
    // Manejar errores aquí si es necesario:
    console.error('Error adding order:', error);
    throw error;
  }
};

export default addOrder;