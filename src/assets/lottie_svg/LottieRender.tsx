import { MouseEvent, useRef, useEffect, CSSProperties } from 'react';
import Lottie from 'lottie-web';

interface LottieProps{
    animationData: any, 
    containerStyle?: CSSProperties; 
    onCustomClick?: (event: MouseEvent<HTMLDivElement>) => void; 
}

const LottieRender = ({ animationData, containerStyle, onCustomClick}: LottieProps) => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const animationContainer = container.current; 

        if (animationContainer) {
            const animationInstance = Lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            } as Parameters<typeof Lottie.loadAnimation>[0] & { animationData: any });

            return () => {
                // Limpiar la animación al desmontar el componente
                if (animationInstance) {
                    animationInstance.destroy();
                }
            };
        }
    }, [animationData]);

    return <div className='container' ref={container} style={containerStyle} onClick={onCustomClick}></div>
};

export default LottieRender;