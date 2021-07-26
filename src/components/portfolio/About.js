import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import One from '../../images/kiran.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
export default function About() {
    return (
        <Row xs={1} md={1} lg={2}>
            <Fade left in={true}>
                <Col className="aboutme">
                    <div class="wrapper">
                        <ul class="dynamic-txts" style={{float:"left"}}>
                            <Bounce top cascade>
                                <li className="textAnimateMain">
                                    I am a  
                                    <span className="textAnimate">
                                            Designer
                                    </span>
                                </li>
                            </Bounce>
                            <Bounce top cascade>
                                <li className="textAnimateMain">
                                    I am a 
                                    <span className="textAnimate">
                                        Developer
                                    </span>
                                </li>
                            </Bounce> 
                        </ul>
                    </div>
                </Col>
            </Fade>
            <Fade top duration={4000}>
                <Col className="aboutmeImg">
                    <div class="slider-thumb">
                        <img src={One} alt="kiran" className="aboutIcon"></img>
                    </div>
                </Col>
            </Fade>
        </Row>  
    )
}
