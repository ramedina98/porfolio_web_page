import React from "react";
import { Skeleton } from "@mui/material";

const TitleResumeSkeleton: React.FC = () => {

    return (
        <>
            <div
                style={{
                    width: '100%'
                }}
            >
                <Skeleton
                    animation='wave'
                    width={130}
                    height={40}
                />
            </div>
        </>
    )
}

export default TitleResumeSkeleton; 