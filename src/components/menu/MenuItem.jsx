import { Counter } from "../counter/Counter";

// eslint-disable-next-line react/prop-types
export const MenuItem = ({name}) => {
    return (
       <li>{name} <Counter/> </li>
    );
};

