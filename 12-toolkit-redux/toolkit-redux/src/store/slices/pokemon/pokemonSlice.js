import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        nextPage: (state, /* action */ ) => {
            state.page += 1;
        },
        setPokemons: (state, action) => {
            state.isLoading= false;
            state.page= action.payload.page;
            state.pokemons= action.payload.pokemons;
        },
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
    }
});
// Action creators are generated for each case reducer function
  export const { startLoadingPokemons, nextPage, setPokemons } = pokemonSlice.actions;