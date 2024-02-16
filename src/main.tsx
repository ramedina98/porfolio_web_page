import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx'
import Home from './components/app/Home.tsx';
import Resume from './components/app/Resume.tsx';
import WorkProjects from './components/workProjects/WorkProjects.tsx';
import MyProjects from './components/personalProjects/MyProjects.tsx';
import PersonalProject from './components/personalProjects/PersonalProject.tsx';
import Project from './components/workProjects/Project.tsx';
import Blog from './components/blog/Blog.tsx';
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
          <Route path="/work_projects" element={<WorkProjects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/my_projects" element={<MyProjects />}></Route>
          <Route path="/personal_project/:id" element={<PersonalProject />}></Route>
        </Route>
        <Route path="/resume" element={<Resume />}></Route>
        {/*Este parte del router, posteriormete necesitara agregarle más rutas
          para el correcto funcionamiento del blog*/}
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
