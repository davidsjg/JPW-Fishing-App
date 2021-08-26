import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Contain from "../Contain/Contain";
import Col from "../Col/Col";
import ColLogo from "../Col/Col";
import JPWlogo from "./JPWlogo.png";
// import styles from "./NavigationBar.module.css";
import Row from "../Row/Row";
import Image from "react-bootstrap/Image";

// import styles from "./NavigationBar.module.css";

// import { StyleSheet, Text, View } from 'react-native'

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Contain>
          <Row>
            <Col size="md-4">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Pictures</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <ColLogo size="md-4">
              <Image src={JPWlogo} fluid rounded />
            </ColLogo>
            <Col size="md-4">CHUP</Col>
          </Row>
        </Contain>
      </Container>
    </Navbar>
  );
}

// const styles = StyleSheet.create({})
