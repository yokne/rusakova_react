import * as s from "./tabs.module.css";

// eslint-disable-next-line react/prop-types
export const Tabs = ({ activeTab = 0, tabs = [], onClick }) => {
    if (tabs.length === 0) return null;

    return (
        <div>
            <ul className={s.tabs}>
                {tabs.map((tab) => (
                    <Tab key={tab.id} name={tab.name} isActive={activeTab === tab.id} onClick={() => {onClick(tab.id)}}/>
                ))}
            </ul>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const Tab = ({ name, isActive, onClick }) => {
    console.log(s.tab);
    return (
        <li className={`${s.tab}${isActive?' '+s.active:''}`} onClick={onClick}>
            {name}
        </li>
    );
};
