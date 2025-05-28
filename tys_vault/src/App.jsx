import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Socials from './components/Socials';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
        <Socials />
      </main>
    </div>
  );
};

export default App;
