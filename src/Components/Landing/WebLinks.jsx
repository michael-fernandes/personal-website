import React from 'react';

function WebLinks() {
  return (
    <div className="web-links-container">
      <span className="web-link"> 
        <a href="https://www.github.com/michael-fernandes" tabIndex={0}>Github</a>
      </span>
      <span className="web-link">
        <a href="https://www.linkedin.com/in/mike-fernandes/" tabIndex={0}>LinkedIn</a>
      </span>
      <span className="web-link web-link-email">
        <a href="m.fern93@gmail.com" tabIndex={0}>m.fern93@gmail.com</a></span>
    </div>
  );
}

export default WebLinks;