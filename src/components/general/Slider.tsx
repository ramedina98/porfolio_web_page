import React, { CSSProperties} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../css/style.css';
import { Pagination } from 'swiper/modules';

//This component contain all the main content of the page...
interface SliderProps{  
    data: any,
    customStyle?: CSSProperties;
}

const Slider: React.FC<SliderProps> = ({ data, customStyle }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    
    return (
        <>
            <Swiper
                pagination={ pagination }
                modules={ [Pagination] }
                style={ customStyle }
                spaceBetween={50} 
                slidesPerView={1}
            >
                {data && data.map((project:any) => (
                    <SwiperSlide key={project.id} >
                        
                    </SwiperSlide>
                ))}
            </Swiper>
    </>
    )
}

export default Slider