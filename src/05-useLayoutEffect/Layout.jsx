import { useFetch, useCounter } from "../hooks";
import { Loading } from "../03-Examples/Loading";
import { Poke } from "../03-Examples/Poke";

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, error } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    );
    console.log({ data, isLoading, error });

    return (
        <>
            <h1>PokeApi</h1>
            <hr />

            {
                isLoading 
                ? <Loading />
                : <Poke {...data} />
            }
            
            <button className="btn btn-primary" onClick={() => decrement()}>
                Previous Pokémon
            </button>
            <button className="btn btn-primary" onClick={() => increment()}>
                Next Pokémon
            </button>
        </>
    );
};
