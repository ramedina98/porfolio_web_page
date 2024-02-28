import React, { useState, useEffect, CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from '../../assets/lottie_json/burguer_menu.json';
import NavMenu from '../../components/app/NavMenu.tsx';

interface Props{
    customStyle: CSSProperties, 
    logoColor: CSSProperties,
}

const Header: React.FC<Props> = ({ customStyle, logoColor }) => {

    //Get the current location of the application using React Router...
    const location = useLocation();
    //Extract the current path from the location... 
    const currentPath = location.pathname;

    //define the "bgColor" state and the setBgcolor function to update it...
    const [bgColor, setBgColor] = useState<CSSProperties>({ backgroundColor: '#FFFAEB' });

    //Map background colors based on specific routers...
    const bgColorMap: { [key: string]: CSSProperties } = {
        '/my_projects': { backgroundColor: '#f8ffff' },
        // TODO: agregar más colores...
        default: { backgroundColor: '#FFFAEB' },
    };

    //Function to update the background color based on the current route...
    const updateBgColor = () => {
        //Get the color corresponding to the current route or the default color...
        const colorForPath = bgColorMap[currentPath] || bgColorMap.default;
        //update the "bgColor" state only if the current color is different from the previous one...
        setBgColor((prevColor) => (
            //use JSON.stringify to compare objects and determine if the are equal...
            JSON.stringify(prevColor) !== JSON.stringify(colorForPath) ? colorForPath : prevColor
        ));
    };
    
    //side effect to update the background color when the route changes...
    useEffect(() => {
        updateBgColor();
    }, [currentPath]);

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

            {menuAbierto && 
                <NavMenu 
                    cerrarMenu={() => { SetMenuAbierto(false); document.body.style.overflowY = 'auto'; }} 
                    customBG={ bgColor }
                />
            }
        </>
    )
}

export default Header;