// eslint-disable-next-line react/prop-types
export const ReviewsItem = ({ text, user }) => {
    return (
        <div>
            <p>{user}</p>
            <p>{text}</p>
        </div>
    );
};
