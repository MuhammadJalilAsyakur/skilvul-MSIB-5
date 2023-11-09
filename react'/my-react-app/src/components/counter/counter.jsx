import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const penambahan = () => {
        setCount(count + 1);
    }

    const pengurangan = () => {
        setCount(count - 1);
        if (count <= 0) setCount(0);
    }


    return (
        <>
            <button onClick={penambahan}>+</button>
            <span>{count}</span>
            <button onClick={pengurangan}>-</button>
        </>
    );
}

export default Counter;
