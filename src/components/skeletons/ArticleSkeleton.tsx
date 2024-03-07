import React from "react";
import { Skeleton } from "@mui/material";

const ArticleSkeleton: React.FC = () => {

    return (
        <>
            <div className="w-full h-auto text-left p-3 flex flex-col justify-start items-start">
                <div className="mb-7 w-full h-auto py-2">
                    <h2
                        className=""
                    >
                        <Skeleton 
                            animation="wave" 
                            width={450} 
                            height={55} 
                            style={{
                                marginBottom: '1em'
                            }}
                        />
                    </h2>
                </div>
                {Array(9).fill(0).map((_, index) => (
                        <p 
                            key={index} 
                            style={{}}
                        >
                            <Skeleton 
                                animation="wave" 
                                width={350} 
                                height={25} 
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