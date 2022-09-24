
import { doc, setDoc, collection, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, deleteNoteById, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        // uid
        const { uid } = getState().auth;

        const newNote = {
            title: 'an awesome title',
            body: 'a new exiting journey',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc(collection(FirebaseDB, `/${uid}/journal/notes`));
        const resp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        // uid
        const { uid } = getState().auth;

        if (!uid) throw new Error('uid is null, could not recover notes');

        const result = await loadNotes(uid);
        const notes = [];
        result.forEach(doc => {
            notes.push({
                id: doc.id,
                ...doc.data()
            });
        })
        dispatch(setNotes(notes));
    }
}

export const updateActiveNote = (note) => {
    return async (dispatch, getState) => {
        dispatch(setActiveNote(note));
    }
}

export const saveActiveNote = (note) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        // uid
        const { uid } = getState().auth;
        const noteId = note.id;
        const newDoc = doc(collection(FirebaseDB, `/${uid}/journal/notes`), noteId);
        const resp = await updateDoc(newDoc, note);
        dispatch(updateNote({ note }));
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const fileUploadUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(fileUploadUrls));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { activeNote: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));

    }
}