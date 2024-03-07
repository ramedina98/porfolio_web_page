import React, {CSSProperties} from "react";

interface Props{
    text: string,
    textStyle: CSSProperties,
}

const Paragraph: React.FC<Props> = ({ text, textStyle }) => {

    return (
        <>
            <p
                style={textStyle}
            >
                {text}
            </p>
            <br />
        </>
    )
}

export default Paragraph;