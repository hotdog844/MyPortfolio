import React from "react";
import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container id="home" className="text-center my-5">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a passionate developer with experience in React, TypeScript, and Bootstrap.</p>
    </Container>
  );
};

export default Home;
