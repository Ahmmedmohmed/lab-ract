import React from 'react';

function Contact  ()  {
  return (
    <section className="contact py-5 bg-dark text-white text-center">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: ahmed@example.com</p>
        <p>Phone: 01111111111</p>
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

export default Contact;

