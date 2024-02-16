import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LottieRender from './assets/lottie_svg/LottieRender.tsx';
import animationData from './assets/lottie_json/burguer_menu.json';
import NavMenu from './components/app/NavMenu.tsx';


//Here we only defined the header and the footer

interface AppProps{
  apiKey: string; 
}
const App: React.FC<AppProps> = ( { apiKey } ) => {

  const [menuAbierto, SetMenuAbierto] = useState(false);
  
  {/*Mañana hay que continuar aqui*/}
  
  const customBurguerMStyle = {
    width: '60px', 
    height: '50px',
    cursor: 'pointer',
    borderRadius: '0.3em', 
    backgroundColor: '#1A6491', 
    padding: '1px'
  };

  {/*this is the function that helps us to display the menu when we click on the svg*/}
  const handleLottieClick = () => {
    SetMenuAbierto(true);
    document.body.style.overflowY = 'hidden';
  }

  
  return (
    <>
    {/*TODO: darle un back ground CDS cuando haga escrolll*/}
      <header className='py-5 bg-transparent fixed top-0 right-0 w-full flex justify-center items-center'>
        <div className='flex justify-between items-center w-clampHeader'>
          <div className='text-sizeTitleHeader text-CTW font-medium tracking-wider'>Ricardo Medina</div>
          {LottieRender({animationData, containerStyle: customBurguerMStyle, onCustomClick: handleLottieClick})}
        </div>
      </header>

      {menuAbierto && <NavMenu cerrarMenu={() => { SetMenuAbierto(false); document.body.style.overflowY = 'auto'; }} />}

      {/*this must be respected, so that the router works at 100%*/}
      <Outlet />
      <footer className='bg-CBS py-5 flex justify-center items-center'>
        <div className='w-clampFooter flex justify-center items-center flex-col px-1 py-6'>
          <div className=' w-full py-4'>
            {/*TODO: aqui debe ir mi logo, osea hay que cambiar esto cuando este listo dicho logo*/}
            <div className='text-CTW text-sizeTitleHeader pl-5'>Ricardo Medina</div>
          </div>

          <div className='w-full py-5 flex justify-start items-start flex-wrap gap-4'>
            {/*TODO: hay que agregar las rutas correctas a cada seccion y cambiar los <a></a> por <Link></Link>
                    No las tiene porque aun no estan definidas correctamente*/}
            <div className='w-wfooterNav'>
              <ul className='w-full h-full p-3'>
                <li className='text-CTW p-3 tracking-wider text-lisFooter rounded-lg cursor-pointer hover:bg-CGS'>My Work</li>
                <li className='text-CTW p-3 tracking-wider text-lisFooter rounded-lg cursor-pointer hover:bg-CGS'>My Resume</li>
                <li className='text-CTW p-3 tracking-wider text-lisFooter rounded-lg cursor-pointer hover:bg-CGS'>My Blog</li>
                <li className='text-CTW px-3 pb-3 mt-8 font-bold'>SAY HELLO</li>
                <li className='text-CTW p-3 tracking-wider text-lisFooter rounded-lg cursor-pointer hover:bg-CGS'>
                  <a href="mailto:rmedinamartindelcampo@gmail.com">Send me an email</a>
                </li>
                <li className='text-CTW p-3 tracking-wider text-lisFooter rounded-lg cursor-pointer hover:bg-CGS'>
                  <a href='https://t.me/ricardoMedinaDev'>t.me/RicardoMedinaDev</a>
                </li>
              </ul>
            </div>

            <div className='ml-10'>
              <ul className='w-full h-full p-3'>
                <li className='p-2 rounded-b-xl hover:bg-CGS my-2'>
                  <a href="https://github.com/ramedina98" target='_blank' className='w-full p-3'>
                    <i className="fa-brands fa-github text-lg text-CTW"></i>
                  </a>
                </li>
                <li className='p-2 rounded-full hover:bg-CGS my-2'>
                  <a href="https://www.linkedin.com/feed/" target='_blank' className='w-full p-3'>
                    <i className="fa-brands fa-linkedin-in text-lg text-CTW"></i>
                  </a>
                </li>
                <li className='p-2 rounded-full hover:bg-CGS my-2'>
                  <a href="https://www.instagram.com/richard_b_stone/?hl=es-la" target="_blank" className='w-full p-3'>
                    <i className="fa-brands fa-instagram text-lg text-CTW"></i>
                  </a>
                </li>
                <li className='p-2 rounded-full hover:bg-CGS my-2'>
                  <a href="" target='_blank' className='w-full p-3'>
                    <i className="fa-brands fa-twitter text-lg text-CTW"></i>
                  </a>
                </li>
                <li className='p-2 rounded-t-xl hover:bg-CGS my-2'>
                  <a href="https://open.spotify.com/user/315krne4ot5xcvh2kfmvolela6m4?si=091f91ae53034e87" target='_blank' className='w-full p-3'>
                    <i className="fa-brands fa-spotify text-lg text-CTW"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className='w-full pl-5 py-6'>
            <div className='py-4'>
              <p className='text-CTW tracking-wider text-sm'>
                <i className="fa-solid fa-copyright"></i> Ricardo Medina 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
