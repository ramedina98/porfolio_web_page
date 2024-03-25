import React from 'react';
import '../../css/index.css';
import { motion } from "framer-motion";
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from '../../assets/lottie_json/space.json';
import Me from '../../assets/images/me.png';
import Pattern from '../../assets/svg/pattern.svg';
import Programing from '../../assets/svg/programin2.svg';
import Design from '../../assets/svg/design.svg';
import Experience from '../../assets/svg/experience.svg';
import ContactForm from '../general/ContactForm.tsx';
import { Link } from 'react-router-dom';
//This component contain all the main content of the page...

const Home: React.FC = () => {

    //handle the scroll up automatically...
    const scrollTop = () => {
        window.scroll({ top:0, behavior: 'auto' });
    }

    scrollTop();

    //Customized styles for the burger menu...
    const customSpaceStyle = {
        width: '280px', 
        height: '150px',
    };

    /*this is the function that helps us to display the menu when we click on the svg*/
    const handleLottieClick = () => {
        console.log('hola');
    }

    
    return (
        <>
            <section>
                {/*here is the first part of the home page, where is the presentation
                and my photo...*/}
                <div className='first_view w-full h-auto flex justify-center items-center px-1 py-3'>
                    <div className='w-clampFirstPartHome h-auto flex justify-between items-center flex-wrap gap-'>
                        {/*title, brief and more*/}
                        <div className='w-full h-hFirstView flex justify-center items-start flex-col px-5 firstPartHome:w-wTitleBrief firstPartHome:px-0'>
                            {/*Title*/}
                            <div className='w-full py-5'>
                                <h2 className='text-fontTitleWork font-extrabold text-CSH'>Front-End <br/> Developer</h2>
                            </div>
                            {/*slogan*/}
                            <div className='w-full py-5 mobileBM:w-96 mb-9'>
                                <p className='text-CSH font-medium tracking-wider text-lg leading-8'>
                                    From idea to final product, <span className='text-CST'>I am</span> a <span className='text-CST'>Skilled developer </span>
                                    bringing versatility and comprehensive solutions.
                                </p>
                            </div>
                            {/*Space*/}
                            {LottieRender({animationData, containerStyle: customSpaceStyle, onCustomClick: handleLottieClick})}
                        </div>
                        {/*Photo*/}
                        <div className=' border-green-500 w-full h-hFirstView2 firstPartHome:w-wMyPhoto firstPartHome:h-hFirstView' style={{ backgroundImage: `url(${Me})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>

                        </div>
                    </div>
                </div>
                {/*More about me: some skills...*/}
                <div className='bg-CSH w-full h-auto flex justify-center items-center px-1 py-3'>
                    <motion.div 
                        initial={{ opacity: 1, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='w-clampSecondPartHome my-6 h-auto flex flex-col justify-between items-center'>
                        <div className='w-full my-5 ml-2 flex justify-center secondPartHome:justify-between items-center flex-wrap gap-1'>
                            <div 
                                className='secondPartHome:w-wHomeSecondPartDivSkill w-full mb-6 secondPartHome:mb-0'>
                                <h3 
                                    style={{ fontSize: 'clamp(40px, 8vw, 3.75em)' }} 
                                    className='text-CGS font-extrabold tracking-wide p-2 secondPartHome:p-1'
                                >
                                    Creativity
                                </h3>
                                <br/>
                                <p 
                                    style={{ 
                                            backgroundImage: `url(${Pattern})`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center', 
                                            backgroundSize: 'cover'}} 
                                    className='text-CBS font-medium leading-7 tracking-wide text-lg p-2 secondPartHome:p-1 rounded-md'
                                >    
                                    While I might not conform to the traditional image of an artist stationed behind 
                                    an Illustrator canvas intricately adjusting pixels, I innovate. 
                                    Engaged in style sheets, perfecting typography, and contemplating arrangements 
                                    is where you'll encounter me. <span>My commitment revolves around crafting smooth user 
                                    interactions</span> while staying attuned to the latest trends.
                                </p>
                            </div>
                            <div 
                                className='p-1 secondPartHome:p-0 w-full secondPartHome:w-1/2 h-56'>
                                <div 
                                    style={{
                                            backgroundImage: `url(${Design})`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center', 
                                            backgroundSize: 'contain'}} 
                                    className='w-full h-full'></div>
                            </div>
                        </div>
                        <div className='w-full my-5 mr-2 flex justify-between flex-col-reverse secondPartHome:flex-row items-center flex-wrap gap-1'>
                            <div className='p-1 secondPartHome:p-0 w-full secondPartHome:w-1/2 h-56'>
                                <div 
                                    style={{backgroundImage: `url(${Programing})`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center', 
                                            backgroundSize: 'contain'}} 
                                    className='w-full h-full'></div>
                            </div>
                            <div className='secondPartHome:w-wHomeSecondPartDivSkill w-full mb-6 secondPartHome:mb-0'>
                                <h3 
                                    style={{ 
                                            fontSize: 'clamp(40px, 8vw, 3.75em)', 
                                            backgroundImage: `url(${Pattern})`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center', 
                                            backgroundSize: 'cover'
                                        }} 
                                    className='text-CGS font-extrabold tracking-wide p-2 secondPartHome:p-1 rounded-md'
                                >
                                    Development
                                </h3>
                                <br/>
                                <p className='text-CBS font-medium leading-7 tracking-wide text-lg p-2 secondPartHome:p-1'>
                                    When constructing JavaScript applications, <span>I'm armed with precisely the tools 
                                    needed</span> and can autonomously operate to provide swift, robust solutions optimized 
                                    for scalability — prioritizing both performance and scalability is central to my 
                                    approach.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/*My experience*/}
                <div className='bg-CST w-full h-auto flex justify-center items-center px-1 py-3'>
                    <div className='w-clampSecondPartHome h-auto my-6 flex justify-center secondPartHome:justify-between items-center flex-wrap gap-1'>
                        <div className='w-clampTextDivExp secondPartHome:w-wHomeSecondPartDivSkill h-auto py-5'>
                            <div>
                                <h3 
                                    style={{ fontSize: 'clamp(40px, 8vw, 3.75em)' }} 
                                    className='text-CSTO font-extrabold mb-5 tracking-wide p-2 leading-tight secondPartHome:p-1'>
                                    In the course of the years
                                </h3>
                            </div>
                            <div>
                                <p className='text-CTW font-medium leading-7 tracking-wide text-base p-2 secondPartHome:p-1 rounded-md mb-2'>
                                    Over the years, I've poured my energy into every project, driven by 
                                    a relentless pursuit of excellence. This commitment has been the 
                                    cornerstone of my ability to craft top-tier products for a diverse 
                                    range of clients.
                                </p>
                                <p className='text-CTW font-medium leading-7 tracking-wide text-base p-2 secondPartHome:p-1 rounded-md mb-2'>
                                    My role as a Front-End Web Developer at the City Hall of Zapopan marked a 
                                    significant chapter in my life. I spearheaded the transformation of the Recrea website, aiming to provide educational 
                                    opportunities in development, programming, and languages for the community's youth.
                                </p>
                                <p className='text-CTW font-medium leading-7 tracking-wide text-base p-2 secondPartHome:p-1 rounded-md mb-2'>
                                    I played a key role in developing responsive components with cutting-edge technologies 
                                    and integrating crucial Node.js APIs for database access and management. Beyond scripting, 
                                    I actively contributed to layout development on secondary pages, injecting ideas for an 
                                    enhanced user experience.
                                </p>
                                <p className='text-CTW font-medium leading-7 tracking-wide text-base p-2 secondPartHome:p-1 rounded-md'>
                                    At SAFEPRO, I excelled in front-end duties, API integration, and ensuring a seamless user experience. Proficient in 
                                    API utilization, I enhanced solution functionality and connectivity. I also contributed to 
                                    database design, ensuring information integrity and security.
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 secondPartHome:mt-0 w-full secondPartHome:w-wHomeSecondPartDivSkill h-hFirstView2'>
                            <div style={{ backgroundImage: `url(${Experience})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}} className='w-full h-full'></div>
                        </div>
                    </div>
                </div>
                {/*My projects: component.*/}
                <div className='w-full h-auto px-1 py-3 bg-COTF flex justify-center items-center'>
                    <div className='bg-CBS rounded-sm w-clampSecondPartHome h-auto my-24 flex flex-col screenProjectsSection:flex-row justify-start items-center screenProjectsSection:items-start'>
                        {/*Personal projects.*/}
                        <div
                            style={{
                                width: 'clamp(310px, 95%, 620px)',
                                height: '550px',
                            }}
                            className='screenProjectsSection:border-r-2 border-CSH flex flex-col justify-center items-start'
                        >
                            <div className='w-full h-auto px-6 py-4'>
                                <h3 
                                    style={{fontSize: 'clamp(40px, 8vw, 2.75em)'}}
                                    className='text-CSH font-bold tracking-wider'
                                >
                                    My projects
                                </h3>
                            </div>
                            <div className='w-full h-56 px-6 py-4'>
                                <div 
                                    style={{
                                        width: 'clamp(70px, 95%, 300px)'
                                    }}
                                >
                                    <p className='text-CSH font-normal tracking-wider text-xl leading-8'>
                                        Personal projects: merging art and code. Explore my web development 
                                        in <span className='text-CSTO'>frontend and backend</span>.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full flex h-auto py-4'>
                                <Link 
                                    to={'/my_projects'}
                                    style={{
                                        width:'clamp(2px, 95%, 270px)',
                                        height: '55px'
                                    }}
                                    className='relative z-10 px-6 py-4 text-CSH'
                                >
                                    <motion.div
                                        style={{
                                            scale: 1,
                                            backgroundColor: 'transparent', 
                                            borderRadius: '0',
                                            x: 0,
                                            fontWeight: '400',
                                        }}
                                        whileHover={{
                                            scale: 1.1, 
                                            backgroundColor: '#4ecdcf63',
                                            borderRadius: '0.3em',
                                            x: 30,
                                            fontWeight: '600',
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className='tracking-wide border-2 w-full h-full absolute z-0 flex justify-center items-center'
                                    >
                                        SEE MY PROJECTS <i className="fa-solid fa-arrow-right ml-3"></i>
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                        {/*work projecst.*/}
                        <div
                            style={{
                                width: 'clamp(310px, 95%, 620px)',
                                height: '550px',
                            }}
                            className='screenProjectsSection:border-l-2 border-CSH flex flex-col justify-center items-start'
                        >
                            <div className='w-full h-auto px-6 py-4'>
                                <h3 
                                    style={{fontSize: 'clamp(40px, 8vw, 2.75em)'}}
                                    className='text-CSH font-bold tracking-wider'
                                >
                                    Work Projects
                                </h3>
                            </div>
                            <div className='w-full h-56 px-6 py-4'>
                                <div 
                                    style={{
                                        width: 'clamp(70px, 95%, 300px)'
                                    }}
                                >
                                    <p className='text-CSH font-normal tracking-wider text-xl leading-8'>
                                        <span className='text-CSTO'>Explore my journey</span> through featured projects, showcasing technical prowess and creative solutions.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full flex h-auto py-4'>
                                <Link 
                                    to={'/work_projects'}
                                    style={{
                                        width:'clamp(2px, 95%, 270px)',
                                        height: '55px'
                                    }}
                                    className='relative z-10 px-6 py-4 text-CSH'
                                >
                                    <motion.div
                                        style={{
                                            scale: 1,
                                            backgroundColor: 'transparent', 
                                            borderRadius: '0',
                                            x: 0,
                                            fontWeight: '400',
                                        }}
                                        whileHover={{
                                            scale: 1.1, 
                                            backgroundColor: '#4ecdcf63',
                                            borderRadius: '0.3em',
                                            x: 30,
                                            fontWeight: '600',
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className='tracking-wide border-2 w-full h-full absolute z-0 flex justify-center items-center'
                                    >
                                        SEE MY WORK <i className="fa-solid fa-arrow-right ml-3"></i>
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*contact form*/}
                <div className='w-full py-4 bg-COTF flex justify-center items-center'>
                    <div
                        style={{
                            width: 'clamp(310px, 95%, 850px)'
                        }}
                        className='h-auto flex flex-col justify-center items-center py-6 my-20'
                    >
                        <div className='w-full text-center py-6 mb-14'>
                            <h3 
                                style={{ fontSize: 'clamp(40px, 8vw, 2.55em)' }} 
                                className='font-bold tracking-wider text-CBS'>
                                Let's talk about your project
                            </h3>
                        </div>
                        <ContactForm 
                            screenClassName='inputsCF:w-inputsCf'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home