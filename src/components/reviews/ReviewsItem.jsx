// eslint-disable-next-line react/prop-types
export const ReviewsItem = ({ text, user }) => {
    return (
        <li>
            <p>{user}</p>
            <p>{text}</p>
        </li>
    );
};
