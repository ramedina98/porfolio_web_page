import React, { CSSProperties } from "react";
import { Skeleton } from "@mui/material";

interface Props{
    contStyle: CSSProperties, 
    titleStyle: CSSProperties
}

const CoreTechSkeleton: React.FC<Props> = ({ contStyle, titleStyle }) => {

    return (
        <>
            <div
                style={contStyle}
            >
                <div>
                    <h3
                        style={titleStyle}
                        className="mb-2 py-1"
                    >
                        <Skeleton 
                            width={200}
                            height={40}
                            animation="wave"
                        />
                    </h3>
                </div>
                <ul>
                    {Array(4).fill(0).map((_, index) => (
                        <li 
                            key={index}
                        >
                            <Skeleton
                                width={260}
                                height={30}
                                animation="wave"
                                style={{
                                    marginBottom: '1em'
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CoreTechSkeleton; 