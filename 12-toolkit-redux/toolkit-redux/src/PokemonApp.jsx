import { useEffect } from "react"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, nextPage } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const dispatch = useDispatch();

    const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <Fragment>
            <h1>Pokemon App</h1>
            <hr />

            {isLoading && <span> Loading... </span>}

            <ul>
                {
                    pokemons.map((pokemon) => {
                        return (
                            <li key={pokemon.name}>
                                {pokemon.name}
                            </li>
                        )
                    })
                }
            </ul>

            <button disabled={isLoading} className="btn btn-primary" onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </Fragment>
    )
}
