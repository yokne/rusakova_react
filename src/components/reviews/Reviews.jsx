import { ReviewForm } from "../reviewForm/reviewForm";
import { ReviewsItem } from "./ReviewsItem";
import s from "./reviews.module.css";

// eslint-disable-next-line react/prop-types
export const Reviews = ({ items = [] }) => {
    if(items.length === 0) return null;

    return (
        <div className="reviews">
            <h3 className="title">Reviews</h3>
            <ul className={s.list}>
                {items.map((item) => {
                    return (
                        <li key={item?.id} className={s.item}>
                            <ReviewsItem
                                key={item?.id}
                                text={item?.text}
                                user={item?.user}
                                rating={item?.rating}
                            />
                        </li>
                    );
                })}
                <li className={s.item} >
                     <ReviewForm/>
                </li>
            </ul>
           
        </div>
    );
};

