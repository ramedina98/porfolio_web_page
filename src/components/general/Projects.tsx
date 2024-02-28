import React, { CSSProperties } from "react";
import CardProject from "./Card";
import CardSkeleton from "../skeletons/CardSkeleton";

//data array interface...
interface Project {
    cover_image_text: string;
    description_project: string;
    name_project: string;
    github_link: string;
    project_id: number;
    web_link: string;
}

//interface for defining component props...
interface Props{
    Title: string,
    Brief: string, 
    customStyle: CSSProperties, 
    data: Project[], 
    loading: boolean,
    path: string,
    web: boolean, 
    github: boolean,
}

const Projects: React.FC<Props> = ({ Title, Brief, customStyle, data, loading, path, web, github}) => {


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
                    ) : (data.map((project: any, index: number) => (
                            <CardProject 
                                key={index}
                                id={project.project_id}
                                coverImg={project.cover_image_text}
                                title={project.name_project}
                                brief={project.description_project}
                                links={{
                                    0: [{
                                        exist: github,
                                        link: project.github_link
                                    }], 
                                    1: [{
                                        exist: web, 
                                        link: project.web_link
                                    }]
                                }}
                                customStyle={{
                                    backgroundColor: '#f8ffff',
                                    color: '#252A2D', 
                                }}
                                path={path}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    )
}

export default Projects; 