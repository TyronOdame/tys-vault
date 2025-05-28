import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-title-container">
        <h2 id="pro-title">Projects</h2>
      </div>

      <div className="project-message-container">
        <p>
          These are all of the projects that I have contributed in and or worked
          on by myself
        </p>
      </div>

      <div className="project-container">
        <ul className="projects">
          <li className="each-project-card"></li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
