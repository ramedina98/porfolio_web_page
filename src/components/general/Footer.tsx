import React from "react";
import { Link } from "react-router-dom";
import '../../css/index.css';

const Footer: React.FC = () => {

    return (
        <>
            <footer className='bg-CBS py-5 flex  z justify-center items-center'>
                <div className='w-clampFooter flex justify-center items-center flex-col px-1 py-6'>
                <div className=' w-full py-4'>
                    {/*TODO: aqui debe ir mi logo, osea hay que cambiar esto cuando este listo dicho logo*/}
                    <div className='text-CTW text-sizeTitleHeader pl-5 tracking-wider'>
                        <Link to="/" className="fontStyle">Ricardo Medina</Link>
                    </div>
                </div>

                <div className='w-full py-5 flex justify-start items-start flex-wrap gap-4'>
                    <div className='w-wfooterNav'>
                    <ul className='w-full h-full p-3'>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                            <Link to="/work_projects" className='w-full p-3'>My Work</Link>
                        </li>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                            <Link to="/my_projects" className='w-full p-3'>My Projects</Link>
                        </li>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                            <Link to="/resume" className='w-full p-3'>My Resume</Link>
                        </li>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                            <Link to="/blog" className='w-full p-3'>My Blog</Link>
                        </li>
                        <li className='text-CTW px-3 pb-3 mt-8 font-bold'>SAY HELLO</li>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                        <a href="mailto:rmedinamartindelcampo@gmail.com" className='w-full p-3'>Send me an email</a>
                        </li>
                        <li className='text-CTW tracking-wider text-lisFooter flex rounded-lg cursor-pointer hover:bg-CGS'>
                        <a href='https://t.me/ricardoMedinaDev' className='w-full p-3'>t.me/RicardoMedinaDev</a>
                        </li>
                    </ul>
                    </div>

                    <div className='ml-10'>
                    <ul className='w-full h-full p-3'>
                        <li className='my-4 py-2'>
                        <a href="https://github.com/ramedina98" target='_blank' className='w-full p-5 rounded-b-xl hover:bg-CGS'>
                            <i className="fa-brands fa-github text-lg text-CTW"></i>
                        </a>
                        </li>
                        <li className='my-4 py-2'>
                        <a href="https://www.linkedin.com/feed/" target='_blank' className='w-full p-5 rounded-full hover:bg-CGS'>
                            <i className="fa-brands fa-linkedin-in text-lg text-CTW"></i>
                        </a>
                        </li>
                        <li className='my-4 py-2'>
                        <a href="https://www.instagram.com/richard_b_stone/?hl=es-la" target="_blank" className='w-full p-5 rounded-full hover:bg-CGS'>
                            <i className="fa-brands fa-instagram text-lg text-CTW"></i>
                        </a>
                        </li>
                        <li className='my-4 py-2'>
                        <a href="https://twitter.com/Ricardo_M_Dev" target='_blank' className='w-full p-5 rounded-full hover:bg-CGS'>
                            <i className="fa-brands fa-twitter text-lg text-CTW"></i>
                        </a>
                        </li>
                        <li className='my-4 py-2'>
                        <a href="https://open.spotify.com/user/315krne4ot5xcvh2kfmvolela6m4?si=091f91ae53034e87" target='_blank' className='w-full p-5 rounded-t-xl hover:bg-CGS'>
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
                        <br />
                        <br />
                        This page was designed with React <i className="fa-brands fa-react"></i> TypeScript <i className='bx bxl-typescript'></i> and Tailwind <i className='bx bxl-tailwind-css' ></i>
                    </p>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer; 