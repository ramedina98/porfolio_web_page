import React, { CSSProperties } from "react";

interface Props{
    text: string,
    listStyle: CSSProperties
}
const ListItem: React.FC<Props> = ({ text, listStyle }) => {

    return (
        <>
            <div 
                style={listStyle}
                className="w-full">
                <i className="fa-solid fa-square text-xs mr-3"></i>
                {text}
            </div>
            <br />
        </>
    )
}

export default ListItem;