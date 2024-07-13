import { useState } from "react";
import { Menu } from "../../../components/menu/Menu";
import { Reviews } from "../../../components/reviews/Reviews";
import { Title } from "../../../components/title/Title";
import { restaurants } from "../../../constants/restaurants-mock";
import { Tabs } from "../../../components/tabs/Tabs";

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

            <Title title={restaurants[activeRestaurant].name} />
            <Menu items={restaurants[activeRestaurant].menu} />
            <Reviews items={restaurants[activeRestaurant].reviews} />
        </div>
    );
};
