// eslint-disable-next-line react/prop-types
export const Reviews = ({ items = [] }) => {
    if(items.length === 0) return null;

    return (
        <div className="reviews">
            <h3 className="title">Reviews</h3>
            <ul className="list">
                {items.map((item) => {
                    return (
                        <ReviewsItem
                            key={item?.id}
                            text={item?.text}
                            user={item?.user}
                            rating={item?.rating}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const ReviewsItem = ({ text, user }) => {
    return (
        <li>
            <p>{user}</p>
            <p>{text}</p>
        </li>
    );
};
