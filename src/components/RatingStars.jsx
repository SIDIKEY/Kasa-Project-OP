import star from "../images/empty_star.svg";

const RatingStars = ({ rating, max = 5 }) => {
  return (
    <div className="rating">
      {Array(max).fill(0).map((_, rate) => {
        return (
          <img
            src={star}
            key={rate}
            alt="filled_star"
            className={rating >= rate ? "filled" : "empty"}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
