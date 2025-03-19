import "./App.css";
import React, { useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";

const App: React.FC = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeInElements.forEach((el) => observer.observe(el));

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5 pt-5 text-light">
        {/* Introduction */}
        <section id="home" className="text-center fade-in">
          <h1 className="display-4 fw-bold text-dark">
            Welcome to My Portfolio
          </h1>
          <p className="lead text-dark">
            I am a passionate developer with experience in React, TypeScript,
            and Bootstrap.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-5 fade-in">
          <h2 className="fw-bold text-dark">Skills</h2>
          <Row className="mt-3">
            {["JavaScript", "React", "TypeScript", "Bootstrap", "Node.js"].map(
              (skill, index) => (
                <Col key={index} md={2} sm={4} xs={6} className="mb-2">
                  <span className="badge bg-primary p-2">{skill}</span>
                </Col>
              )
            )}
          </Row>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 fade-in">
          <h2 className="fw-bold text-dark">Projects</h2>
          <Row className="mt-3">
            {[1, 2, 3].map((project) => (
              <Col md={4} sm={6} xs={12} key={project}>
                <Card className="bg-dark text-light mb-3">
                  <Card.Img
                    variant="top"
                    src={`https://via.placeholder.com/300?text=Project+${project}`}
                    alt={`Project ${project}`}
                  />
                  <Card.Body>
                    <Card.Title>Project {project}</Card.Title>
                    <Card.Text>
                      Short description of project {project}.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-5 fade-in">
          <h2 className="fw-bold text-dark">Contact Me</h2>
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </Container>
    </>
  );
};

export default App;
