import { Counter } from "../counter/Counter";

// eslint-disable-next-line react/prop-types
export const MenuItem = ({name}) => {
    return (
       <div>{name} <Counter/> </div>
    );
};

