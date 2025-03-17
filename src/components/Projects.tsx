import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface Project {
  title: string;
  image: string;
}

const projects: Project[] = [
  { title: "Project 1", image: "https://via.placeholder.com/150" },
  { title: "Project 2", image: "https://via.placeholder.com/150" },
  { title: "Project 3", image: "https://via.placeholder.com/150" },
];

const Projects: React.FC = () => {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
