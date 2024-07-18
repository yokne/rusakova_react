import { useState } from "react";

export const useCounter = (value, min, max) => {
    const [count, setCount] = useState(value);

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
        }
    };
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
        }
    };

    return {increment, decrement, count, setCount}
}