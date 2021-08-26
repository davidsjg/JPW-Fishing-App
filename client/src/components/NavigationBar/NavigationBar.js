import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Contain from "../Contain/Contain";
import Col from "../Col/Col";
import Row from "../Row/Row";
import JPWlogo from "./JPWlogo.png";

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
            <Col size="md-4">
              <img src={JPWlogo}></img>
            </Col>
            <Col size="md-4">CHUP</Col>
          </Row>
        </Contain>
      </Container>
    </Navbar>
  );
}

// const styles = StyleSheet.create({})
