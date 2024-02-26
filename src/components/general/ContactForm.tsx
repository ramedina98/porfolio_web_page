import React, {useState, ChangeEvent, FormEvent } from 'react';
import PostApi from '../../api/PostApi';
import AlertNotification from './AlertNotification';
import { AlertColor } from '@mui/material';
import Progress from './Progress';
import '../../css/index.css'

interface FormData{
    name: string, 
    email: string, 
    message: string,
}


const ContactForm: React.FC = () => {

    //initial state of the form data... 
    const initialFormData: FormData = {
        name: '',
        email: '',
        message: '',
    }

    //state to store the form data and the function to update it...
    const [formData, setFormData] = useState<FormData>(initialFormData);
    //state to store the label for the name field and its function to update it...
    const [nameLabel, setNameLabel] = useState<string>('Your Name');
    //state to store the label for the email Address and its function to update it...
    const [emailLabel, _setEmailLabel] = useState<string>('Email Address');

    //true or false, loader (progress)...
    const [loading, setLoading] = useState<boolean>(false);

    //show notification...
    const [notification, setNotification] = useState<boolean>(false);

    //notification (success or error)
    const [sev, setSev] = useState<AlertColor | undefined>(undefined);

    //notiffication message's...
    const [notificationMessage, setNotificationMessage] = useState<string>('');
    
    //here we handle the supervision of the changes in the inputs to validate the input name and assign the information...
    const handleInputChage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target; 

        //The only one to validate is the name input...
        if(id === 'name'){
            if(/^\s/.test(value)){
                //if there is a space at the begining do not update the status...
                setNameLabel('Do not leave space at the beginning');
                return; 
            } else if(/.*\d.*/.test(value)){
                setNameLabel('No Numbers')
            } else{
                setNameLabel('Your Name');
            }

            //only characters...
            const cleanedValue = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData((prevData) => ({
                ...prevData,
                [id]: cleanedValue,
            }));
        }

        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            //succes zone...

            //Set loading to true when starting the API request...
            setLoading(true);
            
            //API request (POST METHOD)...
            await PostApi('http://localhost:3000/message_email', formData); 
            
            //show the notification...
            setNotification(true);

            //if the request is successful, update the status to "success"
            setSev('success');

            //if the request is successful, send a message of success...
            setNotificationMessage('The message was successfully sent, I will contact you soon'); 

            //we cleaned up the inputs, this is because if the shipment was successful... 
            setFormData(initialFormData);

        } catch(error){
            //Error zone

            console.error('Error al enviar el formulario:', error);
            //show notification...
            setNotification(true);

            //en error notification...
            setSev('error'); 

            //notification message...
            setNotificationMessage('An error occurred while sending the email');
            
        }  finally{
            //we close the loader...
            setLoading(false);

            //wait 7 seconds to close the notification...
            setTimeout(() => {
                setNotification(false);
            }, 7000); 
        }
    }
    
    return (
        <>
            <form 
                onSubmit={handleSubmit}
                className='w-full h-auto p-4 bg-transparent flex flex-col justify-center items-center relative'
            >
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
                            {nameLabel}
                        </label>
                        <input 
                            onChange={handleInputChage}
                            value={formData.name}
                            type="text" 
                            id="name" 
                            required
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
                            {emailLabel}
                        </label>
                        <input 
                            onChange={handleInputChage}
                            type="email" 
                            id="email" 
                            required
                            placeholder='Enter your email address'
                            value={formData.email}
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
                        onChange={handleInputChage}
                        id="message" 
                        name="nombreDelCampo" 
                        rows={4} 
                        cols={50} 
                        value={formData.message}
                        style={{
                            borderBottom: '1px solid #6C0BDF', 
                            outline: 'none',
                            boxShadow: '0px, 1px 6px #21212142'
                        }}
                        required
                        placeholder='Hello! I would love to discuss a new project with you. How quickly could we talk about this and get to work?'
                        className='mt-4 w-full h-24 px-2 py-4 bg-transparent text-CGS font-semibold tracking-wider'
                    />
                </div>
                <input 
                    type="submit" 
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

                {loading && <Progress customCss={{ backgroundColor: 'transparent' }}/>}
                {notification && 
                    <AlertNotification 
                        message={notificationMessage} 
                        CustomeStyle={{ 
                            position: 'absolute',  
                            width: 'clamp(310px, 95%, 350px)'
                        }}
                        severity={ sev }
                    />
                }
            </form>
        </>
    )
}

export default ContactForm