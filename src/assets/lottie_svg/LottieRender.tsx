//Importing necessary modules and types from the react library and lottie-web library...
import { MouseEvent, useRef, useEffect, CSSProperties } from 'react';
import Lottie from 'lottie-web';

// Interface defining the props expected by the LottieRender component...
interface LottieProps{
    animationData: any, 
    containerStyle?: CSSProperties; 
    onCustomClick?: (event: MouseEvent<HTMLDivElement>) => void; 
}

// Functional component responsible for rendering Lottie animations...
const LottieRender = ({ animationData, containerStyle, onCustomClick}: LottieProps) => {

    // Creating a ref to store the reference to the HTMLDivElement that will contain the Lottie animation...
    const container = useRef<HTMLDivElement | null>(null);

    // useEffect hook to handle Lottie animation initialization and cleanup...
    useEffect(() => {
        // Retrieving the current value of the container ref...
        const animationContainer = container.current; 

        // Checking if the animation container exists...
        if (animationContainer) {
            // Loading the Lottie animation with specified configurations...
            const animationInstance = Lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            } as Parameters<typeof Lottie.loadAnimation>[0] & { animationData: any });

            // Cleanup function to destroy the Lottie animation instance when the component unmounts...
            return () => {
                if (animationInstance) {
                    animationInstance.destroy();
                }
            };
        }
    }, [animationData]);

    // Rendering an empty div with specified class, ref, style, and click event handler...
    return <div className='container' ref={container} style={containerStyle} onClick={onCustomClick}></div>
};

export default LottieRender;