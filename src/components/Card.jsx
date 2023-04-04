import React from "react";

const Card = ({ card, handleCardClick }) => {
  return (
    <div
      className={`shadow-md shadow-gray-600 flex items-center ${
        card.flipped ? "[transform:rotateY(10deg)]" : "bg-white"
      } justify-center cursor-pointer md:h-24 md:w-24 h-14 w-14 hover:scale-105 rounded-xl transition-all duration-1000`}
      onClick={() => handleCardClick(card.id)}
    >
      <div>
        <img
          src={card.img}
          alt={card.alt}
          className={`md:h-24 h-14 scale-110 ${
            !card.flipped
              ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Card;
