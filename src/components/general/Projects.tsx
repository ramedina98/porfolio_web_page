import React, { CSSProperties, useState, useEffect } from "react";
import FetchData from "../../api/GetApi";
import CardProject from "./Card";
import CardSkeleton from "../skeletons/CardSkeleton";

//FetchData Interface...
//TODO: Hacerlo resiclable...
interface Project {
    cover_image_text: string;
    description_project: string;
    name_project: string;
    github_link: string;
    project_id: number;
    technology_icons: string;
    technology_names: string;
    web_link: string;
}

interface Props{
    Title: string,
    Brief: string, 
    customStyle: CSSProperties
}

const Projects: React.FC<Props> = ({ Title, Brief, customStyle }) => {

    //hook for the use of the data obtained by fetching API data...
    const [projects, setProjects] = useState<Project[]>([]);
    //this hook is to show the card skeletons while getting the data from the API...
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const url = "http://localhost:3000/personal_projects";

        const fetchData = async () => {
            try{
                const data = await FetchData<{ projects: Project[]}>(url);
                /*TODO: checar porque dice; La propiedad 'projects' no existe 
                en el tipo 'any[]'.ts(2339) any*/
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
            <section 
                style={customStyle}
                className="w-full h-auto px-2 py-20 flex justify-center items-center flex-col"
            >
                {/*Here we have the title of the page...*/}
                <div className="w-full h-auto py-3 flex flex-col justify-center items-center">
                    <h3 
                        style={{ 
                            fontSize: 'clamp(35px, 8vw, 1.60em)'
                        }}
                        className="text-CBS font-extrabold tracking-wider">
                        <span className="text-slate-500">/</span>
                        {Title}.
                    </h3>
                    <br />
                    <p 
                        style={{ fontSize: '1.16em'}}
                        className="text-CST font-semibold tracking-wider text-center">
                        {Brief}
                    </p>
                </div>
                {/*Here are the cards where the projects are shown...*/}
                <div
                    style={{
                        width: 'clamp(310px, 95%, 1050px)',
                        height: 'auto',
                        minHeight: '550px'
                    }}
                    className="px-2 py-5 mt-16 flex flex-wrap gap-5 justify-start items-start"
                >
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <CardSkeleton key={index}/>
                        ))
                    ) : (projects.map((project: any, index: number) => (
                            <CardProject 
                                key={index}
                                id={project.project_id}
                                coverImg={project.cover_image_text}
                                title={project.name_project}
                                brief={project.description_project}
                                link={project.web_link}
                                gitHubLink={project.github_link}
                                customStyle={{
                                    backgroundColor: '#f8ffff',
                                    color: '#252A2D', 
                                }}
                            />
                        ))
                    )};
                </div>
            </section>
        </>
    )
}

export default Projects; 