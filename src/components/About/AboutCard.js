import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Amine Rouissi </span>
            from <span className="purple"> Tozeur, Tunisia.</span>
            <br /> I am a university student pursuing an Engineering degree (BE)
            in Software Engineering, Application, Services and Networks.
            <br />
            Furthermore, I am currently freelancing as a software developer, 
            offering my expertise independently to various clients.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohamed amine rouissi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
