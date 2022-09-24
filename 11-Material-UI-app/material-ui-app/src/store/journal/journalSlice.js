import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        imageUrls: []
        // active: { id: '123', title: '', body: '', date: 1234567, imageUrls: [] }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            const { note } = action.payload;
            state.notes.forEach(n => {
                if (n.id === note.id) {
                    n.title = note.title;
                    n.body = note.body;
                    n.imageUrls = note.imageUrls
                }
            });
            state.messageSaved = `${note.title}, updated succesfully!`;
            state.isSaving = false;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
        setPhotosToActiveNote: (state, action) =>  {
            state.activeNote.imageUrls = [ ...state.activeNote.imageUrls, ...action.payload ];
            state.isSaving = false;
        }
    }
});
// Action creators are generated for each case reducer function
export const {
    increment
    , addNewEmptyNote
    , setActiveNote
    , setNotes
    , setSaving
    , updateNote
    , deleteNoteById
    , setPhotosToActiveNote
} = journalSlice.actions;