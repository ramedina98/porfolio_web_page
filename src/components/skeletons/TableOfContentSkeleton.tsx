import React from 'react';
import { Skeleton } from '@mui/material';

const TableOfContentsSkeleton: React.FC = () => {

    return (
        <>
            <div 
                className="w-clampTableContents hidden screenArticle:flex"
            >
                <ul className="py-1 w-full">
                    <li
                        style={{}}
                    >
                        <Skeleton 
                            animation="wave" 
                            width={200} 
                            height={50} 
                            style={{
                                marginBottom: '1em'
                            }}
                        />
                    </li>
                    {Array(4).fill(0).map((_, index) => (
                        <li 
                            key={index} 
                            style={{}}
                        >
                            <Skeleton 
                                animation="wave" 
                                width={150} 
                                height={25} 
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

export default TableOfContentsSkeleton; 