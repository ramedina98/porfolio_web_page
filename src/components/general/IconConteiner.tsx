import React, { CSSProperties } from "react";

interface Props {
    icon: string,
    customStyle: CSSProperties,
}

const IconContainer: React.FC<Props> = ({ icon, customStyle }) => {

    return(
        <>
            <div
                style={ customStyle }
                className="flex justify-center items-center py-1 rounded-sm cursor-pointer"
            >
                <i className={icon}></i>
            </div>
        </>
    )
}

export default IconContainer;