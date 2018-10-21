import React from "react";
import { Link } from 'gatsby';

const Card = ({ card }) => {
  return (
    <div className="w-full leading-normal overflow-hidden mb-4 flex content-center flex-col sm:flex-row py-4 border shadow bg-white">
      <div className="h-32 sm:h-48 p-3 sm:w-2/5 text-center flex justify-center">
        <img src={card.image} alt={card.title} className="self-center w-auto h-full sm:w-auto sm:h-auto"></img>
      </div>
      <div className="w-full sm:w-3/5 py-4 border-t sm:border-t-0 sm:border-l mt-2 sm:ml-2 overflow-hidden text-center sm:text-left">
        <div className="px-3">
          <p className="text-xl font-bold mb-1">{card.title}</p>
          <p className="mb-8">
            {card.subtitle}
          </p>
          <div className="px-6">
            <Link
              to={"/"}
              className="border-b-4 border border-red-light rounded shadow block text-center text-sm bg-white hover:bg-red-light px-4 py-2 text-grey-darkest hover:text-grey-lightest no-underline font-semibold"
            >
              {"READ MORE"}
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;
