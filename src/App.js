/*
 * React Imports
 */
import React, { useEffect, useState } from 'react';

/*
 * Component Imports
 */
import Landing from './components/Landing';
import Projects from "./components/Projects";
import About from "./components/About";
import { getProjects } from "./services/api-helper-projects";
/*
 * CSS Imports
 */
import './App.scss';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      getProjects().then(resp => {
          if(resp.status === 200){
              setProjects(resp.projects)
          }
      }).catch(err => {
          console.error(err)
      })
  }, []);

  return (
      <>
        <Landing/>
        <Projects projects={projects}/>
        <About projects={projects}/>
      </>
  );
}

export default App;
