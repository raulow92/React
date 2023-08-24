import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef()
    console.log(inputRef);

    const onClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text" 
                placeholder="Ingrese su nombre" 
                className="form-control"
            />
            <input 
                ref={ inputRef }
                type="text" 
                placeholder="Ingrese su nombre" 
                className="form-control"
            />
            <input 
                type="text" 
                placeholder="Ingrese su nombre" 
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={ onClick }>
                Focus
            </button>

        </>
    );
};
