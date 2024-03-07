//My personal projects...
import React, {useState, useEffect} from 'react';
import Projects from '../general/Projects';
import Header from '../general/Header';
import Footer from '../general/Footer';
import FetchData from '../../api/GetApi';

interface Project {
    cover_image_text: string;
    description_project: string;
    name_project: string;
    github_link: string;
    project_id: number;
    web_link: string;
}

const MyProjects: React.FC = () => {

    //handle the scroll up automatically...
    const scrollTop = () => {
        window.scroll({ top:0, behavior: 'auto' });
    }

    scrollTop();

    //hook for the use of the data obtained by fetching API data...
    const [projects, setProjects] = useState<Project[]>([]);
    //this hook is to show the card skeletons while getting the data from the API...
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const url = "http://localhost:3000/personal_projects";

        const fetchData = async () => {
            try{
                const data = await FetchData<{ projects: Project[]}>(url);
                //Setting the state of projects...
                setProjects(data.projects);
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
                    backgroundColor: '#FFFAEB', 
                    transition: 'background-color 0.5s ease', 
                    position: 'sticky',
                    padding: '3em 0',
                }}
                logoColor={{
                    color: '#6C0BDF',
                }}
            />
            <Projects 
                Title='My projects' 
                Brief='Select a project to know more about it.' 
                customStyle={{
                    backgroundColor: '#FFFAEB'
                }}
                data={projects}
                loading={loading}
                path='/personal_project'
                web={true}
                github={true}
            />
            <Footer />
        </>
    )
}

export default MyProjects