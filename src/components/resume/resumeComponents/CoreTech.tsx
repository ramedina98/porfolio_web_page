import React, { CSSProperties } from "react";
import '../../../css/index.css'; 
import CoreTechSkeleton from "../../skeletons/CoreTechSkeleton";

//TODO: continuar con el stilado de este component...
interface TechnologyInfo {
    tec_name: string;
    type_tec: string;
}

interface Props{
    contStyle: CSSProperties,
    titleStyle: CSSProperties,
    title: string,
    data: TechnologyInfo[],
    loading: boolean,
}

const CoreTech: React.FC<Props> = ({ contStyle, titleStyle, title, data, loading }) => {

    return (
        <>
            {loading ? (
                <CoreTechSkeleton 
                    contStyle={{
                        ...contStyle, 
                        minHeight: '250px',
                    }}
                    titleStyle={{}}
                />
            ) : (
                <div
                    style={contStyle}
                >
                    <div>
                        <h3
                            style={titleStyle}
                            className="mb-2 py-1"
                        >
                            {title}
                        </h3>
                    </div>
                    <ul
                        className="w-full"
                    >
                        {data.map((item: TechnologyInfo, index: number) => (
                            <li 
                                key={index}
                                className="my-list-item py-0.5"
                            >
                                {item.tec_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default CoreTech; 