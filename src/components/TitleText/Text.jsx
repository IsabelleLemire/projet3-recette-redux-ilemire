import React from 'react';
import './TitleText.css';


const Text = (content) => {
    const classnames = ["text"];
    if (content.className) classnames.push(content.className);

    switch (content.as) {
        case "span":
            return <span className={classnames.join(" ")}>{content.children}</span>;
        case "article":
            return <article className={classnames.join(" ")}>{content.children}</article>;
        case "blockquote":
            return <blockquote className={classnames.join(" ")}>{content.children}</blockquote>;
        default:
            return <p className={classnames.join(" ")}>{content.children}</p>;
    };
};

export default Text;
