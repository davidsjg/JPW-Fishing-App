import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Contain from "../Contain/Contain";
import Col from "../Col/Col";
import ColLogo from "../Col/Col";
import JPWlogo from "./JPWlogo.png";
import styles from "./NavigationBar.module.css";
import Row from "../Row/Row";
import Image from "react-bootstrap/Image";

// import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <Navbar className={styles["navBorder"]}>
      <Container>
        <Row>
          <Col size="md-4">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Navbar.Collapse>
                <Nav.Link className={styles["navColor"]} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className={styles["navColor"]} href="#home">
                  Lakes
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Col>
          <Col size="md-4">
            <Image src={JPWlogo} fluid rounded />
          </Col>
          <Col size="md-4">
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link className={styles["navColor"]} href="#home">
                Login
              </Nav.Link>
              <Nav.Link className={styles["navColor"]} href="#home">
                My Profile
              </Nav.Link>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
