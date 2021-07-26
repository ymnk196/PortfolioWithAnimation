import React from 'react';
import Card from 'react-bootstrap/Card';
import P1 from '../../images/p1.png';
import P2 from '../../images/p2.png';
import P3 from '../../images/p3.jpeg';
import P4 from '../../images/p4d.png';
import P5 from '../../images/p5.png';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
export default function Project() {
    return (
        <React.Fragment>
            <Row className="mt-5 justify-content-center align-items-center">
                <Bounce top cascade>
                    <h2 className="mt-3">PROJECTS</h2>
                </Bounce>
            </Row>
            <Fade top  duration={5000}>
                <Row xs={1} md={3} lg={3} className="justify-content-center align-items-center">
                    <Card className="mt-5 ml-5 mr-5">
                        <a href="https://ymnk196.github.io/Portfolio/">
                            <Card.Img variant="top" src={P1} href="https://ymnk196.github.io/Portfolio/"/>
                            <Card.Body>
                                <Card.Title>Portfolio</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                    <Card className="mt-5 ml-5 mr-5"> 
                        <a href="https://ymnk196.github.io/TodoApp/">
                            <Card.Img variant="top" src={P2} />
                            <Card.Body>
                                <Card.Title>Todo App</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                    <Card className="mt-5 ml-5 mr-5">
                        <a href="https://ymnk196.github.io/TextAnimation/">
                            <Card.Img variant="top" src={P3} />
                            <Card.Body>
                                <Card.Title>Text Animation</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                    <Card className="mt-5 ml-5 mr-5">
                        <a href="https://ymnk196.github.io/TextAnimation2/">
                            <Card.Img variant="top" src={P4} />
                            <Card.Body>
                                <Card.Title>Text Animation2</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                    <Card className="mt-5 ml-5 mr-5">
                        <a href="https://ymnk196.github.io/TextAnimation3/">
                            <Card.Img variant="top" src={P5} />
                            <Card.Body>
                                <Card.Title>Text Animation3</Card.Title>
                            </Card.Body>
                        </a>
                    </Card>
                </Row>
            </Fade>
        </React.Fragment>
    )
}
