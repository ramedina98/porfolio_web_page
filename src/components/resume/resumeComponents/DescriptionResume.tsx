import React from "react";
import TextSkeleton from "../../skeletons/TextSkeleton";

interface Props{
    text?: string,
    loading: boolean,
}

const DescriptionResume: React.FC<Props> = ({ text, loading }) => {
    
    return (
        <>
            {loading ? (
                <TextSkeleton 
                    numberOfLines={7}
                    skeletonStyle={{
                        marginTop: '1em',
                        textAlign: 'left', 
                        width: '100%'
                    }}
                />
            ) : (
                <div
                    style={{
                        width: '90%',
                        fontSize: 'clamp(10px, 5vw, 1.2em)'
                    }}
                    className='w-full mb-3 mt-8 text-CBS tracking-wider leading-7 pr-3'
                >
                    {text}
                </div>
            )}
        </>
    )
}

export default DescriptionResume; 