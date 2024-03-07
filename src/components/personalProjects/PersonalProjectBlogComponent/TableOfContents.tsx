import React, { CSSProperties } from "react";
import { Variants, motion } from "framer-motion";
import TableOfContentsSkeleton from "../../skeletons/TableOfContentSkeleton";


interface Props{
    titleOftable: string,
    customTitleStyle: CSSProperties,
    listText: string[],
    customStyle: CSSProperties,
    customLiStyle: CSSProperties,
    customVariants: Variants,
    /*this function is essential since this component is designed so that you
    can click on any li and it will take you to the corresponding div and the 
    navigation will be more comfortable and easy...*/
    onItemClick: (index: number) => void; 
    loading: boolean,
}

const TableOfContents: React.FC<Props> = ({ titleOftable, customTitleStyle, customStyle, listText, customLiStyle, customVariants, onItemClick, loading }) => {

    return(
        <>
            {loading ? (
                <TableOfContentsSkeleton />
            ): (
                <div 
                    style={customStyle}
                    className="w-clampTableContents hidden screenArticle:flex"
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
                </div>
            )}
        </>
    )
}

export default TableOfContents;