import React from "react";
import { Skeleton } from "@mui/material";

interface Props {
    titleWidth?: number;
    titleHeight?: number;
    paragraphWidth?: number;
    paragraphHeight?: number;
    paragraphRepetitions?: number;
}

const ArticleSkeleton: React.FC<Props> = ({ titleWidth, titleHeight, paragraphWidth, paragraphHeight, paragraphRepetitions}) => {

    return (
        <>
            <div className="w-full h-auto text-left p-3 flex flex-col justify-start items-start">
                <div className="mb-7 w-full h-auto py-2">
                    <h2
                        className=""
                    >
                        <Skeleton 
                            animation="wave" 
                            width={titleWidth} 
                            height={titleHeight} 
                            style={{
                                marginBottom: '1em'
                            }}
                        />
                    </h2>
                </div>
                {Array(paragraphRepetitions).fill(0).map((_, index) => (
                        <p 
                            key={index} 
                            style={{}}
                        >
                            <Skeleton 
                                animation="wave" 
                                width={paragraphWidth} 
                                height={paragraphHeight} 
                                style={{
                                    marginBottom: '1em'
                                }}
                            />
                        </p>
                    ))}
            </div>
        </>
    )
}

export default ArticleSkeleton; 