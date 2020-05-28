/*
 * React & Bootstrap Imports
 */
import React from 'react';

/*
 * Component Imports
 */
import Landing from './components/Landing';
import Projects from "./components/Projects";
import About from "./components/About";
/*
 * CSS Imports
 */
import './App.scss';


function App() {
  return (
      <>
        <Landing/>
        <Projects/>
        <About/>
      </>
  );
}

export default App;
