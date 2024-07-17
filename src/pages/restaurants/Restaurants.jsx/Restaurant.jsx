import { Menu } from "../../../components/menu/Menu";
import { Reviews } from "../../../components/reviews/Reviews";
import { Title } from "../../../components/title/Title";
import { restaurants } from "../../../constants/restaurants-mock";

// eslint-disable-next-line react/prop-types
export const Restaurant = ({id = 0}) => {

    return (
        <div className="restaurant">
            <Title title={restaurants[id].name} />
            <Menu items={restaurants[id].menu} />
            <Reviews items={restaurants[id].reviews} />
        </div>
    );
};
