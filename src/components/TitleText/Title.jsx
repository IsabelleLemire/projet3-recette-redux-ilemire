import React from 'react';
import './TitleText.css';

const Title = ({ as, children }) => {
    const classnames = ["title"];
    if (as) classnames.push(as);

    switch (as) {
        case "h2":
            return <h2 className={classnames.join(" ")}>{children}</h2>;
        case "h3":
            return <h3 className={classnames.join(" ")}>{children}</h3>;
        case "h4":
            return <h4 className={classnames.join(" ")}>{children}</h4>;
        case "h5":
            return <h5 className={classnames.join(" ")}>{children}</h5>;
        case "h6":
            return <h6 className={classnames.join(" ")}>{children}</h6>;
        default:
            return <h1 className={classnames.join(" ")}>{children}</h1>;
    }
};

export default Title;
