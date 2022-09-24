import { FirebaseDB } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore/lite";


export const loadNotes = async (uid = '') => {
    if(!uid) throw new Error('uid is null, could not recover notes');

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    console.log(docs, collectionRef);
    return docs;
}