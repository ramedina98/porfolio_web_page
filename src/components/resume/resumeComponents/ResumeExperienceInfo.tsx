import React from "react";
import '../../../css/index.css';
import ResumeExpInfoSkeleton from "../../skeletons/ResumeExperienceInfoSkeleton";

interface Props{
    company: string, 
    position: string, 
    timePeriod: string, 
    tasks: { text: string }[];
    loading: boolean,
}

const ResumeExperienceInfo: React.FC<Props> = ({ company, position, timePeriod, tasks, loading }) => {

    //TODO: hacer un funcion que resetie la forma de la date...
    return (
        <>
            {loading ? (
                <ResumeExpInfoSkeleton />
            ) : (
                <div 
                    className="w-full h-auto py-5 flex flex-col justify-start items-center"
                >
                    <div
                        className="mb-3 w-full flex justify-between items-center py-2 flex-wrap gap-2"
                    >
                        {/*Here we have the name of the company, the position and the date*/}
                        <div 
                            className="text-left w-auto"
                        >
                            <h4
                                style={{
                                    fontSize: 'clamp(16px, 8vw, 1.26em)'
                                }}
                                className="text-CGS font-bold tracking-wider"
                            >
                                {company} 
                                <span className="long-line"></span> 
                                <span 
                                    className="font-normal text-CBS"
                                >
                                    {position}
                                </span>
                            </h4>
                        </div>
                        <div
                            className="w-auto"
                        >
                            <span
                                style={{
                                    fontSize: 'clamp(13px, 6vw, 1.03em)'
                                }}
                                className="text-CBS tracking-wider"
                            >
                                {timePeriod}
                            </span>
                        </div>
                    </div>

                    {/*Tasks*/}
                    <div>
                        <ul
                            className="w-full h-auto"
                        >
                            {tasks.map((item: { text: string }, index: number) => (
                                <li
                                    key={index}
                                    style={{
                                        fontSize: 'clamp(10px, 5vw, 1.2em)'
                                    }}
                                    className="my-list-item text-CBS tracking-wider leading-7 mb-3"
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default ResumeExperienceInfo; 