import React from "react";
import { Link } from "gatsby";

const HeaderLink = ({ url, text }) => {

    return (
        <Link
            to={url}
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-sm lg:text-lg font-bold uppercase hover:text-red text-grey-darkest"
        >
            {text}
        </Link>
    );
};

export default HeaderLink;
