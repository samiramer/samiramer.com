import React from "react";
import { Link } from "gatsby";

const Contact = ({ url, text }) => {

  return (
    <div className="mx-auto mt-10 md:mt-12 mb-6 md:mb-12 text-center">
      <Link
        to={url || "/contact"}
        className="break-words border-b-4 border border-red-light rounded shadow-lg bg-white hover:bg-red-light px-6 py-3 text-lg sm:text-lg text-grey-darkest hover:text-grey-lightest no-underline font-semibold"
      >
        {text || "Let's talk!"}
      </Link>
    </div>
  );
};

export default Contact;
