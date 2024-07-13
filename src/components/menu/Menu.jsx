import { Counter } from "../counter/Counter";

// eslint-disable-next-line react/prop-types
export const Menu = ({items = []}) => {
    return (
        <div className="menu">
            <h3 className="title">Menu</h3>
            <ul className="list">
                {items.map((item)=>{
                    return (<MenuItem key={item?.id} name={item?.name}/>)
                })}
            </ul>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const MenuItem = ({name}) => {
    return (
       <li>{name} <Counter/> </li>
    );
};

