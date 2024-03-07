import React, { CSSProperties } from "react";

interface Props{
    src: string, 
    contImgStyle: CSSProperties
}
const ImgCont: React.FC<Props> = ({ src, contImgStyle }) => {

    return (
        <>
            <figure 
                style={contImgStyle}
            >
                <img 
                    src={src} 
                    alt="img" 
                    className="w-full h-full"
                />
            </figure>
            <br />
        </>
    )
}

export default ImgCont;