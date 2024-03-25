import React, { CSSProperties } from "react";
import { Skeleton } from "@mui/material";

/*TODO: continuar con este componente: 
    1. Hay que lograr que el width de cada linea sea dinamico, desde un minimo a un maximo (funcion)
    2. Hacer que se separe un poco de la parte de arriba...
*/
interface Props{
    numberOfLines: number,
    skeletonStyle: CSSProperties
}

const TextSkeleton: React.FC<Props> = ({ numberOfLines, skeletonStyle }) => {

    return (
        <>
            {Array(numberOfLines).fill(0).map((_, index) => (
                <div
                    key={index}
                    style={skeletonStyle}
                >
                    <Skeleton 
                        animation='wave'
                        height={33}
                    />
                </div>
            ))}
        </>
    )
}

export default TextSkeleton; 