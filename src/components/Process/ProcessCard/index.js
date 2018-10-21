import React from "react";

const Card = ({ card }) => {

  return (
    <div key={card.key} className="flex-1 md:mr-4 shadow border text-center rounded mb-4 md:mb-0 bg-white">
      <div className="p-4">
        <img className="h-16 w-16" alt={card.title} src={card.image} />
        <p className="text-xl font-bold text-grey-darkest">
          {card.title}
        </p>
      </div>
      <div className="pt-4 pb-6 pl-4 pr-4">
        <p className="lg:text-sm" dangerouslySetInnerHTML={{ __html: card.body }}>
        </p>
      </div>
    </div>
  );
};

export default Card;
