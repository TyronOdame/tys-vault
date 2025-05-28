import React from 'react';

const Socials = () => {
  return (
    <section id="socials">
      <div className="socials-title-container">
        <h2 id="soc-title">Socials</h2>
      </div>

      <div className="social-into-message-container">
        <p className="social-intro-message">
          Here are some of my social media accounts where you can find me and
          connect with me. Feel free to reach out!
        </p>
      </div>

      <div className="social-icons-containers">
        <ul className="social-icons">
          <li className="each-icon-card"></li>
        </ul>
      </div>
    </section>
  );
};

export default Socials;
