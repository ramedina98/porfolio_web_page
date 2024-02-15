//here we have the burger menu displayed...
import React from "react";
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from "../../assets/lottie_json/logo.json";

interface NavMenuProps {
    cerrarMenu: () => void;
}
/**<button onClick={cerrarMenu}>
                <i className="fa-regular fa-rectangle-xmark"></i> cerrarMenu
            </button> */

const NavMenu: React.FC<NavMenuProps> = ({ cerrarMenu }) => {

    {/*Mañana hay que continuar aqui*/}

    const customBurguerMStyle = {
        width: '60px', 
        height: '50px',
        borderRadius: '0.3em',  
        padding: '1px'
    };

    {/*this is the function that helps us to display the menu when we click on the svg*/}
    const handleLottieClick = () => {
        console.log('Hola')
    }
    // Contenido de tu componente NavMenu
    return (
        <div className="w-full h-full absolute z-2 p-4">
            <div className="w-full h-full bg-CSH">
                <div className="w-full py-3 flex justify-between items-center">
                    <div>
                        <div>{LottieRender({animationData, containerStyle: customBurguerMStyle, onCustomClick: handleLottieClick})}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;