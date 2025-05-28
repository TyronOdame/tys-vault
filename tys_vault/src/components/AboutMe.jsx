import React from 'react';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <p>
          Hello everyone! I'm Tyron Odame, a passionate Full Stack Software
          engineer with a love for creating innovative solutions. My journey in
          tech began with a fascination for how things work, and it has evolved
          into a career where I can build and improve digital experiences.
        </p>
        <div className="about-me-pics-container">
          <ul>
            <li className="each-about-pic-card">
              <img src="" />
            </li>
          </ul>
        </div>
        <p>
          When I'm not coding, you can find me learning about new technologies
          or playing sports like lacrosse and soccer. I'm always eager to learn
          and grow, both personally and professionally.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
