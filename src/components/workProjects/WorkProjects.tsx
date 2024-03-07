import React, {useState, useEffect} from 'react';
import Projects from '../general/Projects';
import Header from '../general/Header';
import Footer from '../general/Footer';
import FetchData from '../../api/GetApi';

//work projects interface...
interface Work{
    id_work: number,
    link_project: string,
    logo: string, 
    project_status: string, 
    work_project_name: string,
    end_date: string, 
    start_date: string,
}

//data's prop of projects component...
interface Project {
    cover_image_text: string;
    description_project: string;
    name_project: string;
    github_link: string;
    project_id: number;
    web_link: string;
}

const WorkProjects: React.FC = () => {

    //handle the scroll up automatically...
    const scrollTop = () => {
        window.scroll({ top:0, behavior: 'auto' });
    }

    scrollTop();

    //hook for the use of the data obtained by fetching API data...
    const [projects, setProjects] = useState<Project[]>([]);
    //this hook is to show the card skeletons while getting the data from the API...
    const [loading, setLoading] = useState<boolean>(true);

    //function to format the date...
    const converDate = (dateString: string): String => {

        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();

        // Formatted Date: "DD/MM/YYYY"
        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    /*function to format the array and make it fit the Project interface...
    This is neccessary because the projects component will process and use the
    data in a better way...*/
    const converToProjects = (works: Work[]): Project[] => {
        return works.map((work) => {
            let description;
        
            if (work.project_status === 'finished') {
                description = `Finished: ${converDate(work.end_date)}`;
            } else if (work.project_status === 'progress') {
                description = `In progress: ${converDate(work.start_date)}`;
            } else {
                description = ''; // Otro caso, puedes ajustar según tus necesidades
            }
        
            return {
                cover_image_text: work.logo,
                description_project: description,
                name_project: work.work_project_name,
                github_link: work.link_project, // Ignora esto si no tienes el enlace de GitHub para esos proyectos...
                project_id: work.id_work,
                web_link: work.link_project,
            };
        });
    }

    useEffect(() => {
        const url = "http://localhost:3000/work_projects";

        const fetchData = async () => {
            try{
                const data = await FetchData<{ works: Work[]}>(url);
                setProjects(converToProjects(data.works));
            } catch(error){
                console.log('Error fetching project data: ', error);
            } finally{
                //when the request is finished the skeletons will be hidden...
                setLoading(false);
            }
        }; 

        fetchData();
    }, []);


    return (
        <>
            <Header 
                customStyle={{
                    backgroundColor: '#f8ffff', 
                    transition: 'background-color 0.5s ease', 
                    position: 'relative',
                    padding: '3em 0',
                }}
                logoColor={{
                    color: '#6C0BDF',
                }}
            />
            <Projects 
                Title='Work projects' 
                Brief="Works I've taken in the past." 
                customStyle={{
                    backgroundColor: '#f8ffff'
                }}
                data={projects}
                loading={loading}
                path='/project'
                web={true}
                github={false}
            />
            <Footer />
        </>
    )
}

export default WorkProjects;