//My personal projects...
import React from 'react';
import Projects from '../general/Projects';
import Header from '../general/Header';
import Footer from '../general/Footer';

const MyProjects: React.FC = () => {


    return (
        <>
            <Header 
                customStyle={{
                    backgroundColor: '#FFFAEB', 
                    transition: 'background-color 0.5s ease', 
                    position: 'relative',
                    padding: '3em 0',
                }}
                logoColor={{
                    color: '#6C0BDF',
                }}
            />
            <Projects 
                Title='My projects' 
                Brief='Select a project to know more about it.' 
                customStyle={{
                    backgroundColor: '#FFFAEB'
                }}
            />
            <Footer />
        </>
    )
}

export default MyProjects