import React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

/*we create a component (alert), of material UI. This component is
reuseble so it has the extension alertProps, to be able to changes
its characteristtics as needed when it is used...*/

interface Props extends AlertProps {
    message: string, 
    CustomeStyle: CSSProperties
}

const AlertNotification: React.FC<Props> = ({ message, CustomeStyle, ...props}) => {

    return (
        <>
            <motion.div 
                style={CustomeStyle}
                initial={{ y: -100, opacity: 0 , bottom: 400}}
                animate={{ y: 0, opacity:1 , bottom: 0}}
                transition={{ duration: 3.5 }}
            >
                <Alert 
                    className='w-full h-auto'
                    {...props}
                >
                    {message}
                </Alert>
            </motion.div>
        </>
    );
}

export default AlertNotification;