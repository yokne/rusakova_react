import { MenuItem } from "./MenuItem";

// eslint-disable-next-line react/prop-types
export const Menu = ({ items = [] }) => {
    if (items.length === 0) {
        return <div>No menu</div>;
    }

    return (
        <div className="menu">
            <h3 className="title">Menu</h3>
            <ul className="list">
                {items.map((item) => {
                    return (
                        <li key={item?.id}>
                            <MenuItem  name={item?.name} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
