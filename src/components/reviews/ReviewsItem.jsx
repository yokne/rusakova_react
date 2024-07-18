import { ReviewRating } from "../reviewRating/reviewRating";

// eslint-disable-next-line react/prop-types
export const ReviewsItem = ({ text, user, rating }) => {
    return (
        <div>
            <ReviewRating rating={rating}/>
            <div>{user}</div>
            <div>{text}</div>
        </div>
    );
};
