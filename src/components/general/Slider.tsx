import React, { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../css/style.css';
import { Pagination, Navigation } from 'swiper/modules';
import SliderSkeleton from '../skeletons/SliderSkeleton';

//This component contain all the main content of the page...
interface ImageData {
    img_link: string;
}

interface SliderProps{  
    data: {
        img_carrusel: ImageData[];
    }[],
    customStyle: CSSProperties;
    loading: boolean,
}

const Slider: React.FC<SliderProps> = ({ data, customStyle, loading }) => {


    return (
        <>
            {loading ? (
                <SliderSkeleton 
                    customStyle={ customStyle }
                />
            ): (
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={ [Pagination, Navigation ]}
                    style={ customStyle }
                    className='mySwiper'
                >
                    {data[0].img_carrusel && data[0].img_carrusel.map((project: any, index: number) => (
                        <SwiperSlide 
                            key={index}
                            className='w-full h-full' 
                        >
                            <img
                                src={project.img_link}
                                alt={'img'}
                                style={{
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'contain'
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default Slider