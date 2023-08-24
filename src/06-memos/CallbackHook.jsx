import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback((cant) => {
        setCounter((value) => value + cant)
    }, []);

    return (
        <>
            <h1>CallbackHook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather}/>
        </>
    );
};
