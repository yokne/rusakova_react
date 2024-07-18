// eslint-disable-next-line react/prop-types
export const ReviewRating = ({ rating }) => {
    const ratingArr = Array(rating).fill("*");
    return <div>{ratingArr}</div>;
};
