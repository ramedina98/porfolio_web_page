import React, { useState, CSSProperties } from 'react';
import { Link } from "react-router-dom";
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from '../../assets/lottie_json/burguer_menu.json';
import NavMenu from '../../components/app/NavMenu.tsx';

interface Props{
    customStyle: CSSProperties, 
    logoColor: CSSProperties,
}

const Header: React.FC<Props> = ({ customStyle, logoColor }) => {

    //this hook is for sawing and opening navMenu...
    const [menuAbierto, SetMenuAbierto] = useState(false);
        
    //Customized styles for the burger menu...
    const customBurguerMStyle = {
        width: '60px', 
        height: '50px',
        cursor: 'pointer',
        borderRadius: '0.3em', 
        backgroundColor: '#1A6491', 
        padding: '1px',
    };

    /*this is the function that helps us to display the menu when we click on the svg*/
    const handleLottieClick = () => {
        SetMenuAbierto(true);
        document.body.style.overflowY = 'hidden';
    }

    //TODO: checar como le puedo hacer para que el header no tenga ese efecto al cambiar de relative a fixed...
    return (
        <>
            <header 
                style={ customStyle } 
                className={`py-5 w-full flex justify-center items-center`}
            >
                <div className='flex justify-between items-center w-clampHeader'>
                <div className={`text-sizeTitleHeader font-medium tracking-wider cursor-pointer`}>
                    <Link 
                        to="/"
                        style={logoColor}
                    >
                        Ricardo Medina
                    </Link>
                </div>
                {LottieRender({animationData, containerStyle: customBurguerMStyle, onCustomClick: handleLottieClick})}
                </div>
            </header>

            {menuAbierto && <NavMenu cerrarMenu={() => { SetMenuAbierto(false); document.body.style.overflowY = 'auto'; }} />}
        </>
    )
}

export default Header;