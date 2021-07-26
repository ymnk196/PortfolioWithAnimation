import React from 'react'
import {SiGmail , SiGithub} from 'react-icons/si';
import {IoLogoLinkedin} from 'react-icons/io';
import {FaPhoneSquare} from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Zoom from 'react-reveal/Zoom';

export default function Contact() {
    return (
        <div className="k">
            <Container>
                <Row xs={2} md={4} lg={4} className="justify-content-center align-items-center">
                    <Zoom>
                        <Col className="text-center">
                            <a href="mailto:abc@example.com?subject = Feedback&body = Message"><SiGmail className="contactImg"/></a>
                        </Col>
                    </Zoom>
                    <Zoom>
                        <Col className="text-center">
                            <a href="https://www.linkedin.com/in/kiran-y-aa90941bb"><IoLogoLinkedin className="contactImg"/></a>
                        </Col>
                    </Zoom>
                    <Zoom>
                        <Col className="text-center">
                            <a href="https://github.com/ymnk196"><SiGithub className="contactImg"/></a>
                        </Col>
                    </Zoom>
                    <Zoom>
                        <Col className="text-center">
                            <a href="tel:+91-8892646353"><FaPhoneSquare className="contactImg"/></a>
                        </Col>
                    </Zoom>
                </Row>
            </Container>
        </div>
    )
}
