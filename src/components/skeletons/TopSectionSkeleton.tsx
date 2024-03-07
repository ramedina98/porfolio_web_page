import React, { CSSProperties }from 'react';
import Skeleton from '@mui/material/Skeleton';

interface Props{
    customStyle: CSSProperties
}

const TopSectionSkeleton: React.FC<Props> = ( {customStyle} ) => {
    return (
        <div style={ customStyle }
            className="py-6 w-full flex items-center justify-center"
        >
            <div style={{ width: 'clamp(310px, 95%, 1100px)', minHeight: '600px', borderBottom: '1.7px solid #252A2D' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1' }}>
                    <div className="h-atuo screenTopSection:h-htopsectiondiv flex justify-center items-end w-full screenTopSection:w-clampToSection">
                        <div className="w-full h-auto px-2 py-6 flex flex-col justify-between items-center">
                            <div className="w-full h-auto">
                                <Skeleton variant="text" width={180} height={30}/>
                            </div>
                            <div className="w-full h-auto">
                                <Skeleton variant="text" width={300} height={150}/>
                            </div>
                            <div className="w-full h-auto">
                                <Skeleton variant="text" width={200} height={20}/>
                            </div>
                            <div className="w-full h-auto py-2 flex flex-wrap gap-4 justify-start items-center">
                                {[1, 2, 3, 4].map((index) => (
                                    <Skeleton key={index} width={50} height={50} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-atuo screenTopSection:h-htopsectiondiv flex justify-center items-center w-full screenTopSection:w-clampToSection mb-14 screenTopSection:mb-0">
                        <div className="order-1 w-full screenTopSection:w-wtopSectionImg h-full screenTopSection:h-htopSectionImg">
                            <Skeleton variant="rectangular" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSectionSkeleton;