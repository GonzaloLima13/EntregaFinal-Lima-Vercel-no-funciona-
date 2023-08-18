import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const ordersRef = collection(db, 'orders')

export const addOrder = async (order) => {
    const orderDoc = await addDoc(ordersRef, order)

    const createdOrder = {...order, id: orderDoc.id}

    return createdOrder

}