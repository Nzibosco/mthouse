import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Home() {
    return (
        <Container fluid>
            <Jumbotron fluid>
                <h1 className="Display-4">
                    MT HOUSE
               </h1>
               <p className = "lead">
                    Welcome to Mutual Trust House. A dynamic group of young people committed to making a difference through savings!
              </p>
            </Jumbotron>
            <Row>
                <Col size = "md-12">
                    <Jumbotron>
                       <a className = "display-4" href = "/member">Go to dashboard</a>
                    </Jumbotron>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;