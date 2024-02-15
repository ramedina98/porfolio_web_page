import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx'
import Home from './components/app/Home.tsx';
import Resume from './components/app/Resume.tsx';
import './css/index.css'

const apiKey: string = import.meta.env.VITE_REACT_APP_API_KEY || '';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App apiKey={apiKey} />}>
          {/*Aqui hay que inicar poniendo las demas rutas
          ejemplo en el repositorio donde tengo la app "Where in the world" */}
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
