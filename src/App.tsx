import "bootstrap-icons/font/bootstrap-icons.css";
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
          <Navbar.Brand href="#">Kenneth Desales</Navbar.Brand>
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
      <Container className="mt-5 pt-5 text-light justify-content-center">
        {/* Introduction */}
        <section id="home" className="text-center fade-in">
          <h1 className="display-4 fw-bold text-dark">
            Welcome to My Portfolio
          </h1>
          <p className="lead text-dark">
            I am Kenneth a passionate developer with experience in React,
            TypeScript, and Bootstrap. I am here to help you with your next
            project.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-5 fade-in">
          <h2 className="fw-bold text-dark">Skills</h2>
          <Row className="mt-3 justify-content-center">
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
            <Col md={4} sm={6} xs={12}>
              <Card className="bg-dark text-light mb-3">
                <Card.Img
                  variant="top"
                  src={`https://mdbcdn.b-cdn.net/docs/react/extended/to-do-list/assets/featured.png`}
                  alt={`Project`}
                />
                <Card.Body>
                  <Card.Title>To-do List Project</Card.Title>
                  <Card.Text>
                    Effective To-do List using react and bootsrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <Card className="bg-dark text-light mb-3">
                <Card.Img
                  variant="top"
                  src={`https://www.edureka.co/blog/wp-content/uploads/2019/08/shopping-cart.png`}
                  alt={`Project`}
                />
                <Card.Body>
                  <Card.Title>E-Commerece Simple Cart</Card.Title>
                  <Card.Text>
                    This is my sample of my JavaScript Project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <Card className="bg-dark text-light mb-3">
                <Card.Img
                  variant="top"
                  src={`https://codesandbox.io/api/v1/sandboxes/cu45o/screenshot.png`}
                  alt={`Project`}
                />
                <Card.Body>
                  <Card.Title>Simple Calcutor</Card.Title>
                  <Card.Text>Simple Calculator Using TypeScript.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-5 fade-in">
          <h2 className="fw-bold text-dark">Contact Me</h2>
          <div className="mt-3 d-flex flex-row gap-3 justify-content-center">
            <a
              href="https://www.facebook.com/dy.sailz"
              className="btn btn-primary d-flex align-items-center w-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook me-2"></i> Facebook
            </a>
            <a
              href="https://github.com/dashboard"
              className="btn btn-dark d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github me-2"></i> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kenneth-desales-71690a2b5/"
              className="btn btn-primary d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin me-2"></i> LinkedIn
            </a>
          </div>

          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label className="text-dark">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-dark">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-dark">Message</Form.Label>
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
