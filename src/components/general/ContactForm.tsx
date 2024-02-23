import React, { CSSProperties} from 'react';
import '../../css/index.css'

/*TODO: ver si es necesario en un futuro
    interface SliderProps{  
    data: any,
    customStyle?: CSSProperties;
}*/

const ContactForm: React.FC = () => {
    
    return (
        <>
            <form className='w-full h-auto p-4 bg-transparent flex flex-col justify-center items-center'>
                <div className='w-full h-auto py-3 flex justify-between items-center flex-wrap gap-1'>
                    <div 
                        className='w-full inputsCF:w-inputsCf h-24 flex flex-col justify-center items-start'>
                        <label 
                            htmlFor="name" 
                            style={{
                                fontSize: '1.05em', 
                                color: '#6a0bdf9f'
                            }}
                            className='ml-2 font-medium tracking-wider'
                        >
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder='Enter your name'
                            style={{
                                borderBottom: '1px solid #6C0BDF', 
                                outline: 'none'
                            }}
                            className='mt-4 w-full px-2 py-4 bg-transparent text-CGS font-semibold tracking-wider'
                        />
                    </div>
                    <div 
                        className='w-full inputsCF:w-inputsCf mt-6 inputsCF:mt-0 h-24 flex flex-col justify-center items-start'>
                        <label 
                            htmlFor="email" 
                            style={{
                                fontSize: '1.05em', 
                                color: '#6a0bdf9f'
                            }}
                            className='ml-2 font-medium tracking-wider'
                        >
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder='Enter your email address'
                            style={{
                                borderBottom: '1px solid #6C0BDF', 
                                outline: 'none'
                            }}
                            className='mt-4 w-full px-2 py-4 bg-transparent text-CGS font-semibold tracking-wider'
                        />
                    </div>
                </div>
                <div className='w-full h-auto py-3 flex justify-center items-start flex-col mt-8'>
                    <label 
                        htmlFor="message"
                        style={{
                            fontSize: '1.05em', 
                            color: '#6a0bdf9f'
                        }}
                        className='ml-2 font-medium tracking-wider'
                    >
                        Your Message
                    </label>
                    <textarea 
                        id="message" 
                        name="nombreDelCampo" 
                        rows={4} 
                        cols={50} 
                        style={{
                            borderBottom: '1px solid #6C0BDF', 
                            outline: 'none'
                        }}
                        placeholder='Hello! I would love to discuss a new project with you. How quickly could we talk about this and get to work?'
                        className='mt-4 w-full h-24 px-2 py-4 bg-transparent text-CGS font-semibold tracking-wider'
                    />
                </div>
                {/*TODO: ver si mejor cambio esto por un buttom*/}
                <input 
                    type="send" 
                    value={'GO AHEAD'}
                    style={{
                        border: '1px solid #6C0BDF', 
                        width: 'clamp(310px, 95%, 400px)',
                        fontSize: '1.05em', 
                        color: '#6a0bdf9f',
                        outline: 'none'
                    }}
                    className='input_with_animation my-12 bg-transparent text-center py-4 font-medium tracking-wider cursor-pointer'
                />
            </form>
        </>
    )
}

export default ContactForm