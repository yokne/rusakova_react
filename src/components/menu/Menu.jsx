import { MenuItem } from "./MenuItem";

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


