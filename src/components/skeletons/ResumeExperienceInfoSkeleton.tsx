import React from "react";
import '../../css/index.css';
import { Skeleton } from "@mui/material";
import TextSkeleton from "./TextSkeleton";

const ResumeExpInfoSkeleton: React.FC = () => {

    return (
        <>
            <div 
                className="w-full h-auto py-5 flex flex-col justify-start items-center"
            >
                <div
                    className="mb-3 w-full flex justify-between items-center py-2 flex-wrap gap-2"
                >
                    {/*Here we have the name of the company, the position and the date*/}
                    <div 
                        className="text-left w-auto"
                    >
                        <Skeleton 
                            animation='wave'
                            width={230}
                            height={40}
                        />
                    </div>
                    <div>
                        <Skeleton 
                            animation='wave'
                            width={150}
                            height={40}
                        />
                    </div>
                </div>

                {/*Tasks*/}
                <div
                    style={{
                        width: 'clamp(250px, 95%, 560px)'
                    }}
                >
                    <TextSkeleton 
                        numberOfLines={4}
                        skeletonStyle={{
                            margin: '1em', 
                            textAlign: 'left', 
                            width: '100%'
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default ResumeExpInfoSkeleton; 