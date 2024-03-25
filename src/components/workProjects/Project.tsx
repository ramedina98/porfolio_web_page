import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../api/GetApi';
import Header from '../general/Header';
import FooterContactForm from '../general/FooterContactForm';
import Footer from '../general/Footer';
import ArticleWork from './ArticleWork';
import Slider from '../general/Slider';
import { Skeleton } from '@mui/material';

interface WorkProject {
    id_work: number;
    title: string;
    description: string[];
    imgs: string[];
    link_project: string;
}

interface ImageData {
    img_link: string;
}

interface SliderProps{  
    img_carrusel: ImageData[];
}

const Project: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    //this hook is to show the card skeletons while getting the data from the API...
    const [loading, setLoading] = useState<boolean>(true);
    //hook for the use of the data obtained by fetching API data...
    const [projects, setProjects] = useState<WorkProject>();
    //data required for the slider component...
    const [sliderData, setSliderData] = useState<SliderProps>({ img_carrusel: [], })

    useEffect(() => {
        
        //Building the API endpoint URL using the project ID from the route parametes...
        const url = `https://serverwebpage-production.up.railway.app/work_project/${id}`;

        //Defining an asynchronous function to fetch data from the specified URL...
        const fetchData = async () => {
            try{
                //Using the FetchData function to make an API request and obtaining project data...
                const data = await FetchData<WorkProject>(url);
                //setting the entire project data...
                setProjects(data);
                // Setting the slider data, including
                const imageDataArray = data.imgs.map((imgLink) => ({ img_link: imgLink }));
                setSliderData({
                    img_carrusel: imageDataArray,
                });
            } catch(error){
                //loggin en error message if there is an issue fetching project data...
                console.log('Error fetching project data: ', error);
            } finally{
                //when the request is finished, setting the loading state to false...
                //this help to hide any loading indicators or skeletons...
                setLoading(false);
            }
        }; 

        //invoking the fetchData function when the component mounts...
        fetchData();
    }, []);


    return (
        <>
            <Header 
                customStyle={{
                    backgroundColor: '#f8ffff', 
                    transition: 'background-color 0.5s ease', 
                    position: 'sticky',
                    padding: '3em 0',
                }}
                logoColor={{
                    color: '#6C0BDF',
                }}
            />
            <section className='w-full h-auto bg-COTF flex flex-col justify-center items-start py-10'>
                <div className='w-full h-auto py-12 text-center'>
                    {loading ? (
                        <div 
                            className="flex justify-center items-center"
                        >
                            <Skeleton 
                                width={550}
                                height={70}
                            />
                        </div>
                    ) : (
                        <a 
                            href={projects?.link_project} 
                            target='_blank'
                        >
                            <h2 
                                style={{ fontSize: 'clamp(40px, 2vw, 2.60em)'}}
                                className="text-CBS font-bold tracking-wide"
                            >
                                {projects?.title}
                            </h2>
                        </a>
                    )}
                </div>
                <main
                    className='w-full h-auto flex flex-col justify-center items-center py-10'
                >
                    <div className='mb-24 w-full h-auto flex justify-center items-center'>
                        <Slider 
                            customStyle={{
                                width: '85%',
                                height:'550px',
                                borderRadius: '0.3em',
                                backgroundColor: '#f8ffff',
                            }}
                            data={ [sliderData] }
                            loading={loading}
                        />
                    </div>
                    <ArticleWork 
                        customStyle={{
                            width: 'clamp(310px, 95%, 850px)'
                        }}
                        data={projects?.description}
                        link={projects?.link_project}
                        loading={loading}
                    />
                </main>
            </section>
            <FooterContactForm 
                customBackground={{
                    backgroundColor: '#f8ffff'
                }}
            />
            <Footer />
        </>
    )
}

export default Project