import { ReviewsItem } from "./ReviewsItem";

// eslint-disable-next-line react/prop-types
export const Reviews = ({ items = [] }) => {
    if(items.length === 0) return null;

    return (
        <div className="reviews">
            <h3 className="title">Reviews</h3>
            <ul className="list">
                {items.map((item) => {
                    return (
                        <li key={item?.id}>
                            <ReviewsItem
                                key={item?.id}
                                text={item?.text}
                                user={item?.user}
                                rating={item?.rating}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

