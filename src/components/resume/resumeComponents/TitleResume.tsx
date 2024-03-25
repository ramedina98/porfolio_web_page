import React from "react";
import TitleResumeSkeleton from "../../skeletons/TitleResumeSkeleton";

interface Props{
    text: string, 
    loading: boolean,
}

const TitleResume: React.FC<Props> = ({ text, loading }) => {

    return (
        <>
        {loading ? (
            <TitleResumeSkeleton />
        ): (
            <div
                style={{
                    width: '100%'
                }}
                className='text-left'
            >
                <h3
                    style={{
                        fontSize: '1.5em', 
                        textDecoration: 'underline',
                        textDecorationColor: '#4ecdcf7d', 
                        textDecorationThickness: '3px',
                        textDecorationStyle: 'wavy'
                    }}
                    className='text-CGS font-semibold'
                >
                    {text}
                </h3>
            </div>
        )}
        </>
    )
}

export default TitleResume; 