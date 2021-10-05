import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Edge } from "../interfaces";

export const CreateEdge = async (edge: Edge) => {
  try {
    const docRef = await addDoc(collection(db, "edges"), edge);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
