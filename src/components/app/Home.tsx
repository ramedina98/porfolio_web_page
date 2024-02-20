import React from 'react';
import '../../css/index.css';
import LottieRender from '../../assets/lottie_svg/LottieRender.tsx';
import animationData from '../../assets/lottie_json/space.json';
import Me from '../../assets/svg/me.png';
import Pattern from '../../assets/svg/pattern.svg';
import Programing from '../../assets/svg/programin2.svg';
import Design from '../../assets/svg/design.svg';
//This component contain all the main content of the page...

interface AppProps{
    apiKey: string; 
}

//usar el apiKey cuando sea necesario... ({ apiKey })
const Home: React.FC<AppProps> = () => {

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
                                <h2 className='text-fontTitleWork font-extrabold text-CSH'>Full Stack <br/> Developer</h2>
                            </div>
                            {/*slogan*/}
                            <div className='w-full py-5 mobileBM:w-96 mb-9'>
                                <p className='text-CSH font-medium tracking-wider text-lg leading-8'>
                                    From idea to final product, <span className='text-CST'>I am</span> a <span className='text-CST'>full stack developer </span>
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
                    <div className='w-clampSecondPartHome h-auto flex flex-col justify-between items-center'>
                        <div className='w-full my-5 ml-2 flex justify-center secondPartHome:justify-between items-start flex-wrap gap-1'>
                            <div className='secondPartHome:w-wHomeSecondPartDivSkill w-full mb-6 secondPartHome:mb-0'>
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
                                            backgroundSize: 'cover', 
                                            boxShadow: '0px 2px 5px rgba(26, 26, 26, 0.153)'}} 
                                    className='text-CBS font-medium leading-7 tracking-wide text-lg p-2 secondPartHome:p-1 rounded-md'
                                >    
                                    While I might not conform to the traditional image of an artist stationed behind 
                                    an Illustrator canvas intricately adjusting pixels, I innovate. 
                                    Engaged in style sheets, perfecting typography, and contemplating arrangements 
                                    is where you'll encounter me. <span>My commitment revolves around crafting smooth user 
                                    interactions</span> while staying attuned to the latest trends.
                                </p>
                            </div>
                            <div className='p-1 secondPartHome:p-0 w-full secondPartHome:w-1/2 h-96'>
                                <div 
                                    style={{
                                            backgroundImage: `url(${Design})`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundPosition: 'center', 
                                            backgroundSize: 'contain'}} 
                                    className='w-full h-full'></div>
                            </div>
                        </div>
                        <div className='w-full my-5 mr-2 flex justify-between flex-col-reverse secondPartHome:flex-row items-center secondPartHome:items-start flex-wrap gap-1'>
                            <div className='p-1 secondPartHome:p-0 w-full secondPartHome:w-1/2 h-96'>
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
                                            backgroundSize: 'cover',
                                            boxShadow: '0px 2px 5px rgba(26, 26, 26, 0.153)' }} 
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
                    </div>
                </div>
                {/*My experience
                TODO: continuar aqui...*/}
                <div className='bg-CST w-full h-auto flex justify-center items-center px-1 py-3'></div>
            </section>
        </>
    )
}

export default Home