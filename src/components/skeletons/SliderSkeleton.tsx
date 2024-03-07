import React, { CSSProperties } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Skeleton from '@mui/material/Skeleton';

//TODO:Revisar por que no se cambia de color el back ground de este skeleton...

interface Props{
    customStyle: CSSProperties,
}

const SliderSkeleton: React.FC<Props> = ({ customStyle }) => {
    
    return(
        <>
            <Swiper
                spaceBetween={50} 
                slidesPerView={1}
                style={ customStyle }
            >
                <SwiperSlide className='w-full h-full'>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width="100%"
                        height="100%"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SliderSkeleton;