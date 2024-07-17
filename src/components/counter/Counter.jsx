import { useState } from "react";

export const Counter = () => {
    const [counter, setCount] = useState(0);

    const increment = () => {
        if ( counter < 5) setCount((counter) => counter + 1);
    };

    const decrement = () => {
        if (counter > 0) setCount((counter) => counter - 1);
    };
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span style={{padding: '0 10px'}}>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};
