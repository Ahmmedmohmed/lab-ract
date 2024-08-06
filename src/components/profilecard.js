import React from 'react';
import { ProgressBar } from 'react-bootstrap';


function profilecard  ({ project, index })  {
  const cardStyle = {
    backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef',
  };

  return (
    <div className="card mb-3" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
      </div>
    </div>
  );
};

export default profilecard;