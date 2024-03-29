import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx'
import Home from './components/app/Home.tsx';
import Resume from './components/resume/Resume.tsx';
import WorkProjects from './components/workProjects/WorkProjects.tsx';
import MyProjects from './components/personalProjects/MyProjects.tsx';
import PersonalProject from './components/personalProjects/PersonalProject.tsx';
import Project from './components/workProjects/Project.tsx';
import Blog from './components/blog/Blog.tsx';
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement ).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          {/*Posterior expancion*/}
        </Route>
        <Route path="/work_projects" element={<WorkProjects />}></Route>
        <Route path="/project/:id/:name" element={<Project />}></Route>
        <Route path="/my_projects" element={<MyProjects />}></Route>
        <Route path="/personal_project/:id/:name" element={<PersonalProject />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        {/*Este parte del router, posteriormete necesitara agregarle más rutas
          para el correcto funcionamiento del blog*/}
        <Route path="/blog" element={<Blog />}>
          {/*here will be more components, when the blog's ready*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
