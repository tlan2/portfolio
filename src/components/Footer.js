import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

function Footer() {
    
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center pt-4">
                <IconContext.Provider
                    value={{
                        color: "#4D4C4C",
                        size: "2em",
                        style: { margin: "5px" },
                    }}
                >
                    <div>
                        <a href="https://www.linkedin.com/in/thomasmorelancaster/" target="_blank">
                            <FaLinkedin id="linkedInIcon" />
                        </a>
                        <a href="https://github.com/tlan2" target="_blank">
                            <FaGithub id="gitHubIcon"/>
                        </a>
                    </div>
                </IconContext.Provider>
                </Row>
                <Row className="text-center pt-2 pb-4">
                <Col>
                    &copy; Tom Lancaster
                </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;