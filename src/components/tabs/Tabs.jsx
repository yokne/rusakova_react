import { Tab } from "./Tab";
import s from "./tabs.module.css";

// eslint-disable-next-line react/prop-types
export const Tabs = ({ activeTab = 0, tabs = [], onClick }) => {
    if (tabs.length === 0) return null;

    return (
        <div>
            <ul className={s.tabs}>
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <Tab
                            name={tab.name}
                            isActive={activeTab === tab.id}
                            onClick={() => {
                                onClick(tab.id);
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
