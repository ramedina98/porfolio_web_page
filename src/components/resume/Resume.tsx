import React, { useState, useEffect } from 'react';
import FetchData from '../../api/GetApi';
import DownloadResumeBtn from './resumeComponents/DownloadResumeBtn';
import CoreTech from './resumeComponents/CoreTech';
import TitleResume from './resumeComponents/TitleResume';
import DescriptionResume from './resumeComponents/DescriptionResume';
import ResumeExperienceInfo from './resumeComponents/ResumeExperienceInfo';
import { Link } from 'react-router-dom';
import '../../css/index.css';

//Interfa
interface JobInfo {
    end_date: string;
    job: string;
    position: string;
    start_date: string;
    tasks: { text: string }[];
}

interface TechnologyInfo {
    tec_name: string;
    type_tec: string;
}

interface Resume {
    apellido1: string;
    apellido2: string;
    city: string;
    country: string;
    description_exp: string;
    description_resume: string;
    email: string;
    job_info: JobInfo[];
    job_title: string;
    link_pdf: string;
    nombre1: string;
    nombre2: string;
    phone: string;
    state: string;
    technology_info: TechnologyInfo[];
}

const Resume: React.FC = () => { 

    const [data, setData] = useState<Resume>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const url = 'https://serverwebpage-production.up.railway.app/resume';

        const fetchData = async () => {
            try{
                const data = await FetchData<Resume>(url);
                //setting the state of data...
                setData(data);
            } catch(error){
                console.log('Error fetching project data: ', error);
            } finally{
                setLoading(false);
            }
        }; 

        fetchData();

    }, []);

    const separateByType = (tecnologias: TechnologyInfo[]) => {
        const otherTech = tecnologias.filter(tech => tech.type_tec === 'other'); 
        const theRest = tecnologias.filter(tech => tech.type_tec !== 'other'); 

        return { otherTech, theRest }; 
    }

    const { otherTech, theRest } = separateByType(data?.technology_info || []);

    //Custom style of Core Tech components...
    const CoreTechMainStyle = {
        width: '100%', 
        fontSize: '1.1em',
    }
    //custom style of Core Tech title...
    const CoreTechTitleStyle = {
        fontSize: '1.3em', 
        color: '#6C0BDF', 
        fontWeight: '700', 
        marginTop: '1em'
    }

    // Function to transform date strings into a specific format...
    const transFormDate = (startDateString: string , endDateString: string) => {
        // Array to store month abbreviations...
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        // Convert start date string to a Date object... 
        const startDate = new Date(startDateString);
        // Convert end date string to a Date object... 
        const endDate = new Date(endDateString);
    
        // Get the abbreviation for the month of the start date
        const startMonth = months[startDate.getMonth()];
        // Get the abbreviation for the month of the end date... 
        const endMonth = months[endDate.getMonth()];
    
        // Get the year of the start date
        const startYear = startDate.getFullYear();
        // Get the year of the end date
        const endYear = endDate.getFullYear();
    
        // Return the formatted date range string
        return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
    }


    return (
        <>
            <div
                className='py-14 w-full bg-CSH flex justify-center items-center'
            >
                <div
                    style={{
                        width: 'clamp(310px, 100%, 1200px)'
                    }}
                    className='h-auto px-10 py-5 rounded-md bg-COTF flex flex-col justify-start items-start'
                >

                    {/*btn download resume pdf*/}
                    <div 
                        className='mt-3 mb-7 w-full h-auto py-1 flex justify-end items-center'
                    >
                        <DownloadResumeBtn 
                            resumePdf={data?.link_pdf}
                            aTagStyle={{
                                width: '170px',
                                padding: '0.5em 0', 
                                fontSize: '1.1em',
                                cursor: 'pointer'
                            }}
                            customVariants={{
                                'hover': {
                                    backgroundColor: '#FFFAEB', 
                                    boxShadow: '1px 0px 6px #00000030'
                                },
                                'tap': {
                                    scaleX: '0.97',
                                    backgroundColor: '#f8ffff',
                                }
                            }}
                        />
                    </div>

                    {/*Core tec, others and contact info...*/}
                    <div
                        className='w-full h-auto flex flex-col screenRM:flex-row justify-between items-center screenRM:items-start'
                    >
                        
                        <div
                            style={{
                                minHeight: '400px'
                            }}
                            className='w-full screenRM:w-wResumeCore flex flex-wrap gap-1 justify-start items-start'
                        >
                            <div
                                style={{
                                    width: '310px'
                                }}
                                className='border-b-2 flex flex-col justify-center items-start'
                            >
                                <Link 
                                    to="/"
                                    style={{
                                        borderBottom: '4px solid #4fcdcf45',
                                        fontSize: '1.05em'
                                    }}
                                    className='py-1 my-2 font-semibold tracking-wider text-CGS'
                                >
                                    ricardomedina.website
                                </Link>
                                <p
                                    style={{
                                        fontSize: '1.05em'
                                    }}
                                    className='font-normal tracking-wider text-CBS'
                                >
                                    Zapopan, Jalisco, Mexico
                                </p>
                                <a 
                                    href='mailto:rmedinamartindelcampo@gmail.com'
                                    style={{
                                        borderBottom: '4px solid #4fcdcf45',
                                        fontSize: '1.05em'
                                    }}
                                    className='py-1 mt-2 mb-6 font-semibold tracking-wider text-CGS'
                                >
                                    Mail to me <i className="fa-solid fa-square-envelope"></i>
                                </a>
                            </div>
                            <CoreTech 
                                contStyle={CoreTechMainStyle}
                                titleStyle={CoreTechTitleStyle}
                                title='Core Technologies:'
                                data={theRest}
                                loading={loading}
                            />
                            <CoreTech 
                                contStyle={CoreTechMainStyle}
                                titleStyle={CoreTechTitleStyle}
                                title='Others:'
                                data={otherTech}
                                loading={loading}
                            />
                        </div>
                        {/*the rest of the resume info...*/}
                        <div
                            style={{
                                minHeight: '400px'
                            }}
                            className='w-full screenRM:w-clampwResumeInfo mt-9 screenRM:mt-0'
                        >
                            {/*here we will start with the description of the resume...*/}
                            <div 
                                className='border-b-2 h-auto pb-4 w-full flex flex-col justify-center items-start'
                            >
                                <div
                                    className='w-full mb-3'
                                >
                                    <h3
                                        style={{
                                            fontSize: 'clamp(30px, 8vw, 3.6em)'
                                        }}
                                        className='font-bold tracking-wider text-CGS'
                                    >
                                        Ricardo Medina
                                    </h3>
                                    <span
                                        style={{
                                            fontSize: 'clamp(10px, 4vw, 1.45em)'
                                        }}
                                        className='font-medium tracking-wider text-CBS'
                                    >
                                        Skilled Frontend Developer.
                                    </span>
                                </div>
                                
                                <DescriptionResume 
                                    text={data?.description_resume}
                                    loading={loading}
                                />
                            </div>

                            {/*Information about my experience*/}
                            <div
                                className='py-4 mt-2 flex flex-col justify-start items-center'
                            >
                                {/*Title: experience --- Description*/}
                                <div
                                    className='w-full py-4 flex-col justify-start items-center'
                                >
                                    <TitleResume 
                                        text='Experience'
                                        loading={loading}
                                    />
                                    <DescriptionResume 
                                        text={data?.description_exp}
                                        loading={loading}
                                    />
                                    <div
                                        className='w-full mt-6'
                                    >

                                    </div>
                                    {data?.job_info.map((item: JobInfo, index: number) => (
                                        <ResumeExperienceInfo 
                                            key={index}
                                            company={item.job}
                                            position={item.position}
                                            timePeriod={transFormDate(item.start_date, item.end_date)}
                                            tasks={item.tasks}
                                            loading={loading}
                                        />
                                    ))}
                                </div>
                                {/*Projects*/}
                                <div
                                    className='w-full py-4 flex-col justify-start items-center'
                                >
                                    <TitleResume 
                                        text='Projects'
                                        loading={loading}
                                    />
                                    <div
                                        style={{
                                            width: '90%',
                                            fontSize: 'clamp(10px, 5vw, 1.2em)'
                                        }}
                                        className='w-full mb-3 mt-8 text-CBS tracking-wider leading-7 pr-3'
                                    >
                                        Examples of my work?, navigate to <Link to={'/work_projects'} style={{textDecoration: 'underline', textDecorationColor: '#4ecdcf7d', textDecorationThickness: '3.2px'}} className='hover:text-CST'>work projects</Link>
                                        . For more in-depth 
                                        details, feel free to request a scheduled demo call.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div
                        className='border-t-2 pt-4 mt-4 w-full flex flex-wrap gap-1 justify-between items-end'
                    >
                        <div
                            style={{
                                width: 'clamp(200px, 95%, 300px)'
                            }}
                            className='py-4 text-center'
                        >
                            <span
                                style={{
                                    fontSize: 'clamp(40px, 8vw, 3.75em)'
                                }}
                                className='font-bold text-CGS tracking-wider fontStyle_notI'
                            >
                                Ricardo Medina
                            </span>
                        </div>
                        <div
                            className='mb-6'
                        >
                            <span
                                style={{
                                    fontSize: 'clamp(13px, 5vw, 1.2em)'
                                }}
                                className='text-CBS tracking-wider'
                            >
                                Skilled Frontend Developer.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume