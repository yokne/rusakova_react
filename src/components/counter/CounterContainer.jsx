import { useEffect } from "react";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

// eslint-disable-next-line react/prop-types
export const CounterContainer = ({ value = 0, min = 0, max = 5, onChange = () => {} }) => {
    const {increment, decrement, count, setCount} = useCounter(value, min, max);

    useEffect(() => {
        setCount(value);
    }, [value]);

    useEffect(() => {
        onChange(count);
    }, [count]);

    return <Counter val={count} dec={decrement} inc={increment} />;
};
