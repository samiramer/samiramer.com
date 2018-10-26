import React from "react"
import {Link} from "gatsby"

const Card = ({ card, compact }) => {
  const linkClasses = "border-b-4 border border-red-light rounded shadow text-center text-sm bg-white hover:bg-red-light px-4 py-2 text-grey-darkest hover:text-grey-lightest no-underline font-semibold"
  let imgClasses = "h-32 p-3 text-center flex justify-center items-center"
  let contentClasses = "w-full py-4 border-t md:border-t-0 md:border-l mt-2 md:ml-2 overflow-hidden text-center md:text-left"

  if (compact) {
    imgClasses += " md:w-2/5 md:h-48"
    contentClasses += " md:w-3/5"
  } else {
    imgClasses += " md:w-1/5"
    contentClasses += " md:w-4/5"
  }


  return (
    <div className="w-full leading-normal overflow-hidden mb-4 flex items-center flex-col md:flex-row items-stretch py-4 border shadow bg-white">
      <div className={imgClasses}>
        <img src={card.image} alt={card.title} className="w-auto h-full md:w-auto md:h-auto"></img>
      </div>
      <div className={contentClasses}>
        <div className="px-3">
          <p className="text-xl font-bold mb-1">{card.title}</p>
          <p>
            {card.subtitle}
          </p>
          {card.description &&
            <p className="mt-8 text-sm text-left" dangerouslySetInnerHTML={{ __html: card.description }}></p>
          }
          {card.techStack && 
            <div className="flex flex-row text-sm mt-8 text-left">
              <div className="flex-none py-1 mr-1">Built With</div>
              <div className="flex flex-row flex-wrap">
                {card.techStack.map((tech) => <span className="mb-1 ml-1 rounded bg-red-light px-3 py-1 text-sm text-grey-lighter aliased">{tech}</span>)}
              </div>
            </div>
          }
          <div className="mt-8 flex items-end">
            {card.url ? (
              <a href={card.url} className={linkClasses} target="__blank">CHECK IT OUT HERE</a>
            ) : (
              <Link to='/portfolio' className={linkClasses} target="__blank">READ MORE</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
