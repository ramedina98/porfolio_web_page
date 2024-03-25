import React, { CSSProperties } from "react";
import { motion, Variants } from "framer-motion";

interface Props{
    resumePdf?: string,
    aTagStyle: CSSProperties,
    customVariants: Variants, 
}

const DownloadResumeBtn: React.FC<Props> = ({ resumePdf, aTagStyle, customVariants }) => {

    return (
        <>
            <motion.a
                variants={customVariants}
                whileHover="hover"
                whileTap="tap"
                style={aTagStyle}
                className='rounded-md flex justify-center items-center'
                href={resumePdf}
                target="_blank"
            >
                <i 
                    style={{
                        marginRight: '0.8em',
                        color: '#0077B5'
                    }}
                    className="fa-brands fa-linkedin"
                ></i>
                <i 
                    style={{
                            marginRight: '0.8em',
                            color: '#252A2D'
                        }}
                    className="fa-solid fa-circle-down"
                ></i> 
                <span
                    className="text-CBS"
                >
                    Download
                </span>
            </motion.a>
        </>
    )
}

export default DownloadResumeBtn; 