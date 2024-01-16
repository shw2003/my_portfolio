import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ReactTyped from "react-typed";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Shweta`}
                <br />
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Frontend Developer",
                    "UI/UX Developer",
                  ]}
                  typeSpeed={200}
                  loop
                  backSpeed={20}
                  cursorChar="|"
                  showCursor={true}
                />
              </h1>
              <p>
                Innovative Web Developer, with excellent UI and UX Design skills
                and experience in creating beautiful and Responsive web
                applications with decent user interfaces.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};
