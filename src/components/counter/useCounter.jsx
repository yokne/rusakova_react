import { useEffect, useState } from "react";

export const useCounter = (value, min, max, onChange) => {
    const [count, setCount] = useState(value);

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
            onChange((prev) => prev++);
        }
    };
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
            onChange((prev) => prev--);
        }
    };

    useEffect(() => {
        setCount(value);
    }, [value]);

    return { increment, decrement, count, setCount };
};
