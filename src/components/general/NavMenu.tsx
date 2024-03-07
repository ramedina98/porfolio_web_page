//here we have the burger menu displayed...
import React, { CSSProperties } from "react";
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from "../../assets/lottie_json/logo.json";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


interface NavMenuProps {
    cerrarMenu: () => void;
    customBG: CSSProperties,
}

const NavMenu: React.FC<NavMenuProps> = ({ cerrarMenu, customBG }) => {

    const controls = useAnimation();

    //the 'location' object is obtained, containing details about the current location...
    const location = useLocation();
    //the 'pathname' property is extracted from the 'location' object to get the current path of the URL...
    const currentPath = location.pathname;

    /*const [menuAbierto, setMenuAbierto] = useState(true);*/

    useEffect(() => {
        controls.start({ height: "100%", opacity: 1 });
    }, [controls]);

    //these are the custom styles for the animated svg that is on the upper left hand side...
    const customStyle = {
        width: '60px', 
        height: '50px',
        borderRadius: '0.3em',  
        padding: '1px'
    };

    const handleLottieClick = () => {
        console.log('');
    }

    const navItems = [
        { path: '/', text: "Home", description: "Back to the home page." },
        { path: '/work_projects',text: "Work", description: "My approach to development." },
        { path: '/my_projects',text: "Projects", description: "My personal projects (porfolio)." },
        { path: '/resume',text: "Resume", description: "Explore my journey and skills." },
        { path: '/blog',text: "Blog", description: "My latest writing." },
    ];

    return (
        <motion.div
            className="w-full h-full fixed top-0 left-0 z-50 py-5 px-1 NavmenuMobile:p-5"
            initial={{ height: "150px", opacity: 0 }}
            animate={controls}
            transition={{duration: 0.25}}
        >
            <motion.div
                style={customBG}
                className="w-full h-full rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    className="w-full py-8 flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="ml-2 py-2 w-wHiremeDiv flex justify-evenly items-center flex-row">
                        {LottieRender({
                        animationData,
                        containerStyle: customStyle,
                        onCustomClick: handleLottieClick,
                    })}
                    <div className="border-l-2 border-CSTO py-3 pl-4">
                        <a
                            href="mailto:rmedinamartindelcampo@gmail.com"
                            className="text-CBS font-semibold tracking-wider"
                    >
                            HIRE ME
                        </a>
                    </div>
                    </div>
        
                    <div className="mr-2 py-5 w-wCloseBtn flex justify-center items-center">
                        <i
                            className="fa-regular fa-circle-xmark text-iconBtnX scale-150 text-CST hover:text-CSTO cursor-pointer"
                            onClick={cerrarMenu}
                            ></i>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ scale: 0.3 }}
                    animate={{ scale: 1 }}
                    transition={{duration:0.6}}
                    className="py-1 mt-2 w-full h-auto flex justify-center px-5 mobileBM:justify-start"
                >
                    <div className="hidden border-b-2 border-CSTO w-wLeftLineBM pb-1 ml-4 mr-4 mb-3 justify-center items-end mobileBM:flex">
                        <p className="text-CBS font-semibold tracking-wide">SAY HELLO</p>
                    </div>
                    <div className=" w-wSocialMBM">
                        <ul className="w-full h-full flex justify-evenly items-center flex-row">
                            <li className='p-2 rounded-r-xl hover:bg-CSTO my-2'>
                                <a href="mailto:rmedinamartindelcampo@gmail.com" target='_blank' className='w-full p-3'>
                                    <i className="fa-solid fa-envelope text-lg text-CBS"></i>
                                </a>
                            </li>
                            <li className='p-2 rounded-full hover:bg-CSTO my-2'>
                                <a href="https://t.me/ricardoMedinaDev" target='_blank' className='w-full p-3'>
                                    <i className="fa-brands fa-telegram text-lg text-CBS"></i>
                                </a>
                            </li>
                            <li className='p-2 rounded-full hover:bg-CSTO my-2'>
                                <a href="https://www.linkedin.com/feed/" target='_blank' className='w-full p-3'>
                                    <i className="fa-brands fa-linkedin-in text-lg text-CBS"></i>
                                </a>
                            </li>
                            <li className='p-2 rounded-full hover:bg-CSTO my-2 hidden mobileBM:block'>
                                <a href="https://www.instagram.com/richard_b_stone/?hl=es-la" target="_blank" className='w-full p-3'>
                                    <i className="fa-brands fa-instagram text-lg text-CBS"></i>
                                </a>
                            </li>
                            <li className='p-2 rounded-full hover:bg-CSTO my-2 hidden mobileBM:block'>
                                <a href="" target='_blank' className='w-full p-3'>
                                    <i className="fa-brands fa-twitter text-lg text-CBS"></i>
                                </a>
                            </li>
                            <li className='p-2 rounded-l-xl hover:bg-CSTO my-2'>
                                <a href="https://open.spotify.com/user/315krne4ot5xcvh2kfmvolela6m4?si=091f91ae53034e87" target='_blank' className='w-full p-3'>
                                    <i className="fa-brands fa-spotify text-lg text-CBS"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <div className="w-full h-auto">
                    <ul className="w-full h-hUlBMnav pl-8 p-4">
                    {navItems.map((item, index) => {
                        {/*here we compare if the cirrent path is the same as the item's path*/}
                        const isCurrentPathDifferent = currentPath !== item.path; 

                        return isCurrentPathDifferent ? (
                            <motion.li
                            key={index}
                            initial={{ x: 250, y: -100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 * (index + 1) }}
                            className="flex justify-start items-center w-full py-3"
                            >
                            <Link
                                to={item.path}
                                className="text-fontSnavMB text-CBS font-bold hover:text-CST cursor-pointer mr-10 w-clampLiNavBM"
                                onClick={cerrarMenu}
                            >
                                {item.text}
                            </Link>
                            <span className="hidden screenSapnBM:inline text-CBS text-lg tracking-wider font-medium w-1/2">
                                {item.description}
                            </span>
                            </motion.li>
                        ) : null; 
                    })}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavMenu;