import React from 'react';

function WebLinks(props) {
  return (
    <div className="web-links-container">
      <span className="web-link"> 
        <a href="https://www.github.com/michael-fernandes">Github</a>
      </span>
      <span className="web-link">
        <a href="https://www.linkedin.com/in/mike-fernandes/">LinkedIn</a>
      </span>
      <span className="web-link web-link-email">
        <a href="https://www.linkedin.com/in/mike-fernandes/">m.fern93@gmail.com</a></span>
    </div>
  );
}

export default WebLinks;