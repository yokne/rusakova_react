import { useState } from "react";
import { restaurants } from "../../../constants/restaurants-mock";
import { Tabs } from "../../../components/tabs/Tabs";
import { Restaurant } from "./Restaurant";

export const Restaurants = () => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (
        <div className="restaurants">
            <Tabs
                activeTab={activeRestaurant}
                tabs={restaurants.map((item, i) => {
                    return { id: i, name: item.name };
                })}
                onClick={(id) => {
                    setActiveRestaurant(id);
                }}
            />

            <Restaurant id = {activeRestaurant}/>
        </div>
    );
};
