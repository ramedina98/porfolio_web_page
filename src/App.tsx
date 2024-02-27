import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/general/Footer';
import Header from './components/general/Header';

//Here we only defined the header and the footer

const App: React.FC = () => {

  //code to change the color of the header on scrolling y
  const [_scrollY, setScrollY] = useState(0);
  const [headerColor, setHeaderColor] = useState<string>('transparent');

  useEffect(() => {
      const handleScroll = () => {
      setScrollY(window.scrollY);
      //change the color...
      if(window.scrollY > 50){
          setHeaderColor('#252A2D');
      } else{
          setHeaderColor('transparent');
      }
      };

      //add the scroll event listener...
      window.addEventListener('scroll', handleScroll);

      //clears the event listener when unmounting the component...
      return () => {
      window.removeEventListener('scroll', handleScroll);
      }; 
  }, []);
  
  return (
    <>
      <Header 
        customStyle={{
          backgroundColor: headerColor, 
          transition: 'background-color 0.5s ease', 
          position: 'fixed',
          top: '0', 
          right: '0', 
          zIndex: '20',
        }}
        logoColor={{
          color: '#FFFFFF',
        }}
      />
      <Outlet />

      {/*TODO: hay que hacer que cuando el nav pase por encima del footer desaparesca, 
      o que el fondo de este sea de otro color...*/}
      <Footer />
    </>
  )
}

export default App