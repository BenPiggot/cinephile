import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About This Site</h1>
        <p>Simple Client-side App utilizing the excellent Omdb movies API. Built using React, Redux, and React Router.</p>
      </div>
    </div>
  )
}

export default About;