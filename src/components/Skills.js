import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillProgressBar from './skilprog';
import PortfolioCard from './profilecard';
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 85 },
];

const projects = [
  { title: 'Project 1', description: 'Description of Project 1' },
  { title: 'Project 2', description: 'Description of Project 2' },
];

function Skills() {
  return (
    <Container>
      {/* Skills Section */}
      <section className="skills py-5">
        <h2>Skills</h2>
        {skills.map((skill) => (
          <SkillProgressBar key={skill.name} skill={skill} />
        ))}
      </section>

      {/* Projects Section */}
      <section className="projects py-5">
        <h2>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index}>
              <PortfolioCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Skills;