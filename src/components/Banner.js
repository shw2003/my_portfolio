import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Shweta`}
                <br />
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Front End Developer",
                      "Web Architect ",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p>
                Innovative Web Developer, with excellent UI and UX Design skills
                and experience in creating beautiful and Responsive web
                applications with decent user interfaces.
              </p>
              <Button
                variant="primary"
                className="mt-3"
                href="https://drive.google.com/file/d/1Ro5sj8NUs9rm3LuuSs14tgmOTAf80XQf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <ArrowRightCircle size={20} className="ms-2" />
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};
