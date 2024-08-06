import React from 'react';

import { ProgressBar } from 'react-bootstrap';

function skilprog ({ skill }) {
return (
  <div className="mb-3">
    <label>{skill.name}</label>
    <ProgressBar now={skill.level} label={`${skill.level}%`} />
  </div>
);
};

export default skilprog;