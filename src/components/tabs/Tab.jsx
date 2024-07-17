import s from "./tabs.module.css";

// eslint-disable-next-line react/prop-types
export const Tab = ({ name, isActive, onClick }) => {
    return (
        <div className={`${s.tab}${isActive?' '+s.active:''}`} onClick={onClick}>
            {name}
        </div>
    );
};
