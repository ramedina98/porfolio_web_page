import React from 'react';
import { useParams } from 'react-router-dom';
//This component contain all the main content of the page...

const PersonalProject: React.FC = () => {

    const { id } = useParams<{id: string}>();

    return (
        <>
            <div>Estamos en: PersonalProject - {id}</div>
        </>
    )
}

export default PersonalProject