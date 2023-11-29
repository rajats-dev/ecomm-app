import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <span className="flex flex-row">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {Math.floor(rating) > i ? (
            <AiFillStar fontSize="20px" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </span>
  );
};

export default Rating;
