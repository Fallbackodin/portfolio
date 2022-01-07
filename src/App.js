// import React from 'react';
import React, { useRef } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project'
import './App.css';

function App() {

  const scrollToDiv = (ref) => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: "smooth"});
  const el2 = useRef();

  return (
    <div className='app'>
      <Intro click={() => scrollToDiv(el2)}/>
      <About />
      <Project reference={el2}/>
    </div>
  );
}

export default App;
