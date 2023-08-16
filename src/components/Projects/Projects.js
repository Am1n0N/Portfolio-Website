import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthhub from "../../Assets/Projects/healthhub.webp";
import renter from "../../Assets/Projects/renter.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthhub}
              isBlog={false}
              title="healthhub"
              description="HealthHub is a web application that allows patients to book appointments, manage their patient records, receive remote consultations, manage their prescriptions, receive patient reminders, provide feedback, and monitor their health through a connected device."
              ghLink="https://github.com/TheCodeGlow/projectClinique"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={renter}
              isBlog={false}
              title="Renter"
              description="Renter is an Airbnb-style platform that allows users to easily list and book spaces for rent. Hosts can create listings for their properties with photos, descriptions, pricing and availability. Guests can search through listings, view details, book stays and communicate with hosts."
              ghLink="https://github.com/Am1n0N/Renter-BookingApp"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
