import { useLayoutEffect, useRef, useState } from "react";

export const Poke = (data) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [data]);


    return (
        <>
            <blockquote className="blockquote" style={{ display: 'flex' }}>
                <img src={data?.sprites.front_default} alt={data?.name} />
                <p ref={ pRef } className="mb-0">{data?.name}</p>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    );
};
