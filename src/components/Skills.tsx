import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const skills: string[] = ["JavaScript", "React", "TypeScript", "Bootstrap", "Node.js"];

const Skills: React.FC = () => {
  return (
    <Container id="skills" className="my-5">
      <h2 className="text-center">Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card className="text-center p-3">
              <Card.Body>{skill}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
