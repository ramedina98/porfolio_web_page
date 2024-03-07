import React, { CSSProperties } from "react";
import Paragraph from "../../general/Paragraph";
import ListItem from "../../general/ListItem";
import ImgCont from "../../general/ImgCont";

interface ContentData {
    text: string;
    type: string;
}

interface SubTextData {
    sub_text: string;
    content: ContentData[];
}

interface ArticleProps {
    data: SubTextData,
    customStyle: CSSProperties, //background of the entire element...
    customTitleStyle: CSSProperties,
    customTextStyle: CSSProperties, //text color of the whole component...
    /*For the blog of my personal projacts, the fact that each component has its owne ref
    is essential to make use of the "table of content" component and to be able 
    to navigate through the blog by cliking on...*/
    articleRef: React.RefObject<HTMLDivElement>;
}

const Article: React.FC<ArticleProps> = ({ data, customStyle, customTitleStyle, customTextStyle, articleRef }) => {


    return(
        <>
            <div 
                ref={articleRef}
                style={{ 
                    ...customTextStyle,
                    ...customStyle,
                }}
                className="w-full h-auto text-left p-3 flex flex-col justify-start items-start"
            >
                <div className="mb-7 w-full h-auto py-2">
                    <h2
                        style={customTitleStyle}
                        className=""
                    >
                        {data.sub_text}
                    </h2>
                </div>
                {/*here we print all the content...*/}
                <div className="w-full h-auto py-2 flex flex-col justify-center items-center">
                    {data.content.map((item: ContentData, index: number) => (
                        <div
                            key={index}
                            className="w-full h-auto"
                        >
                            {item.type === 'p' ? (
                                <Paragraph 
                                    text={item.text}
                                    textStyle={{
                                        color: '#252A2D',
                                        lineHeight: '2', 
                                        fontSize: 'clamp(10px, 8vw, 1.25em)',
                                    }}
                                />
                            ) : item.type === 'l' ? (
                                <ListItem 
                                    text={item.text}
                                    listStyle={{
                                        color: '#252A2D',
                                        fontSize: 'clamp(10px, 8vw, 1.25em)',
                                        paddingLeft: '1em',
                                        lineHeight: '1.5', 
                                    }}
                                />
                            ) : (
                                <ImgCont 
                                    src={item.text}
                                    contImgStyle={{
                                        width: '100%',
                                        marginBottom: '1.5em'
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Article; 