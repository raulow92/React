import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'raul',
        email: 'raul@gmail.com'
    })

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        }) 
    }

    // useEffect(() => {
    //     console.log('useState called!');
    // },[]);

    // useEffect(() => {
    //     console.log('Form changed!');
    // }, [formState]);

    // useEffect(() => {
    //     console.log('email changed');
    // }, [email]);



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ handleInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="raul@google.com"
                name="email"
                value={ email }
                onChange={ handleInputChange }
            />
            {
                (username === 'raul2') && <Message />
            }

        </>
    );
};
