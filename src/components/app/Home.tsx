import React from 'react';
import '../../css/index.css';
//This component contain all the main content of the page...

interface AppProps{
    apiKey: string; 
}

//usar el apiKey cuando sea necesario... ({ apiKey })
const Home: React.FC<AppProps> = () => {

    return (
        <>
            <div>
                <div className='first_view h-hFirstView py-9'></div>
            </div>
        </>
    )
}

export default Home