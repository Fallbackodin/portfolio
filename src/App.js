// import React from 'react';
import React, { useRef } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import './App.css';

function App() {

  const scrollToDiv = (ref) => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: "smooth"});
  const el2 = useRef();

  return (
    <div className='app'>
      <Intro click={() => scrollToDiv(el2)}/>
      <About />
      <Project reference={el2}/>
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
