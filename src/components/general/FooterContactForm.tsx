import React, { CSSProperties } from "react";
import ContactForm from "./ContactForm";

interface Props{
    customBackground: CSSProperties,
}

const FooterContactForm: React.FC<Props> = ({ customBackground }) => {

    return (
        <>
            <div 
                style={customBackground}
                className="w-full h-auto flex justify-center items-center"
            >
                <div
                    style={{
                        width: 'clamp(310px, 95%, 1200px)',
                        borderTop: '1px solid #252A2D'
                    }}
                    className="h-auto flex flex-wrap gap-1 justify-center screenFooterForm:justify-between items-center py-16"
                >
                    <div 
                        className="w-4/5 screenFooterForm:w-1/3 h-auto my-8 screenFooterForm:my-0 text-center screenFooterForm:text-left"
                    >
                        <h3 
                            style={{ fontSize: 'clamp(40px, 8vw, 2.55em)' }} 
                            className='font-bold tracking-wider text-CBS'>
                            Let's talk about your project
                        </h3>
                        <br />
                        <p
                            style={{
                                fontSize: 'clamp(10px, 2vw, 1.2em)',
                            }}
                            className="text-CBS font-medium tracking-wider leading-6"
                        >
                            Inspired? Let's craft a unique solution for your company. 
                            Join the conversation, and let's turn your vision into reality!
                        </p>
                    </div>
                    <div 
                        className="w-clampFooterForm h-auto"
                    >
                        <ContactForm 
                            screenClassName='inputsCF:w-inputsPJ'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterContactForm; 