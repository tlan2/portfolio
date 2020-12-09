import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-4 text-center text-primary font-weight-bolder mb-0">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-6 font-weight-light mt-3">{props.subTitle}</h3> }
                        {/* { props.text && <h3 className="lead font-weight-light mt-3">{props.text}</h3> } */}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;