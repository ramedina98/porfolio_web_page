import React, { CSSProperties } from "react";

interface LinksData{
    exist: boolean, 
    text: string,
}

interface Links{
    Git: LinksData, 
    Web: LinksData,
}

interface Props{
    customContStyle: CSSProperties,
    customFont: CSSProperties,
    customAtags: CSSProperties,
    links: Links,
}

const GitAndWebLinks: React.FC<Props> = ({ customContStyle, customFont, customAtags, links }) => {

    return (
        <>
            <div
                style={customContStyle}
                className="flex"
            >
                {links?.Git?.exist && (
                <a 
                    style={customAtags}
                    href={links.Git.text} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i 
                        style={customFont}
                        className="fa-brands fa-github"
                    ></i>
                </a>
                )}
                {links?.Web?.exist && (
                    <a 
                        style={customAtags}
                        href={links.Web.text} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i 
                            style={customFont}
                            className="fa-solid fa-link"
                        ></i>
                    </a>
                )}
            </div>
        </>
    )
}

export default GitAndWebLinks;