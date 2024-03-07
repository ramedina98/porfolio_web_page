import React, { CSSProperties } from "react";
import Paragraph from "../general/Paragraph";
import ArticleSkeleton from "../skeletons/ArticleSkeleton";
import GitAndWebLinks from "../general/GitAndWebLinks";

interface Props{
    customStyle: CSSProperties,
    data?: string[],
    loading: boolean,
    link?: string,
}

const ArticleWork: React.FC<Props> = ({ customStyle, data, link, loading }) => {

    return (
        <>
            {loading ? (
                <div
                    style={customStyle}
                >
                    <ArticleSkeleton 
                        titleWidth={0}
                        titleHeight={0}
                        paragraphWidth={850}
                        paragraphHeight={45}
                        paragraphRepetitions={15}
                    />
                </div>
            ) : (
                <div
                    style={customStyle}
                >
                    {data && data.map((item: string, index: number) => (
                        <Paragraph 
                            key={index}
                            text={item}
                            textStyle={{
                                color: '#252A2D',
                                lineHeight: '2', 
                                fontSize: 'clamp(10px, 8vw, 1.35em)',
                            }}
                        />
                    ))}
                    <div 
                        className="mt-8 flex flex-col justify-start items-start"
                    >
                        <div className="w-full py-1">
                            <h4 
                                style={{
                                    fontSize: 'clamp(10px, 8vw, 1.3em)'
                                }}
                                className="text-CST font-medium tracking-wider"
                            >
                                Link to the web
                            </h4>
                        </div>
                        <GitAndWebLinks 
                            customContStyle={{
                                width: '310px',
                                marginTop: '1em'
                            }}
                            customFont={{
                                color: 'white',
                                fontSize: '1.3em',
                                fontWeight: '700'
                            }}
                            customAtags={{
                                backgroundColor: '#252A2D',
                                borderRadius: '0.3em',
                                width: '70px', 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0.7em'
                            }}
                            links={{
                                Git: {
                                    exist: false,
                                    text: ''
                                },
                                Web: {
                                    exist: true,
                                    text: `${link}`
                                }
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ArticleWork;