import React, { CSSProperties } from "react";
import { Variants, motion } from "framer-motion";
import TableOfContentsSkeleton from "../../skeletons/TableOfContentSkeleton";
import GitAndWebLinks from "../../general/GitAndWebLinks";


interface Props{
    titleOftable: string,
    customTitleStyle: CSSProperties,
    listText: string[],
    customStyle: CSSProperties,
    customLiStyle: CSSProperties,
    customVariants: Variants,
    linkWeb?: string,
    linkGit?: string,
    /*this function is essential since this component is designed so that you
    can click on any li and it will take you to the corresponding div and the 
    navigation will be more comfortable and easy...*/
    onItemClick: (index: number) => void; 
    loading: boolean,
}

const TableOfContents: React.FC<Props> = ({ titleOftable, customTitleStyle, customStyle, listText, customLiStyle, customVariants, linkWeb, linkGit, onItemClick, loading }) => {

    return(
        <>
            {loading ? (
                <TableOfContentsSkeleton />
            ): (
                <div 
                    style={customStyle}
                    className="w-clampTableContents h-auto hidden screenArticle:flex flex-col justify-center items-start"
                >
                    <ul className="py-1 w-full">
                        <li
                            style={customTitleStyle}
                        >
                            {titleOftable}
                        </li>
                        {listText.map((li: string, index: number) => (
                            <motion.li
                                key={index}
                                variants={customVariants}
                                whileHover="hover"
                                whileTap="tap"
                                style={customLiStyle}
                                onClick={() => onItemClick(index)}
                            >
                                {li}
                            </motion.li>
                        ))}
                    </ul>
                    <GitAndWebLinks 
                            customContStyle={{
                                width: '75%',
                                marginTop: '1em', 
                                marginBottom: '3em',
                                justifyContent: 'start',
                                alignItems: 'center',
                                paddingLeft: '1em'
                            }}
                            customFont={{
                                color: 'white',
                                fontSize: '1em',
                                fontWeight: '700'
                            }}
                            customAtags={{
                                backgroundColor: '#252A2D',
                                borderRadius: '0.3em',
                                width: '54px', 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0.5em',
                                marginRight: '1.5em'
                            }}
                            links={{
                                Git: {
                                    exist: true,
                                    text: `${linkGit}`
                                },
                                Web: {
                                    exist: true,
                                    text: `${linkWeb}`
                                }
                            }}
                        />
                </div>
            )}
        </>
    )
}

export default TableOfContents;