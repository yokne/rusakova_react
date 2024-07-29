// eslint-disable-next-line react/prop-types
export const Counter = ({ val = 0, inc, dec }) => {
    return (
        <div className="counter">
            <button onClick={dec}>-</button>
            <span style={{ padding: "0 10px" }}>{val}</span>
            <button onClick={inc}>+</button>
        </div>
    );
};
