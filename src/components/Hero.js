import React from 'react';

function Hero() {
  return (
    <section className="hero text-center bg-primary text-white py-5">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Ahmed Mohmed, a Web Developer.</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com" className="text-white mx-2"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;