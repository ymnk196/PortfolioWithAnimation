import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeveloperImg from '../../images/111.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Experience() {
    return (
        <React.Fragment>
            {/* Experience Div */}
            <Row xs={1} md={1} lg={2} className="mt-5">
                {/* animation to 1st div */}
                <Fade left>
                    {/* details of 1st div */}
                    <Col className="Exp">
                        {/* aligning center */}
                        <Row className="p-5">
                            <Bounce top cascade>
                                <h2 className="m-3 mob">Experience Details</h2>
                            </Bounce>
                            {/* details */}
                            <p>
                                I had expierance of 'one year seven months' as a full stack developer role in the company 'Infanion software solution private limited'. 
                            </p>

                            <Bounce top cascade>
                                <h3 className="m-3">Roles and responsibilities</h3>
                            </Bounce>
                            {/* roles and responsibility */}
                            <ul className="responsibilityLap">
                                <li>Worked in 'Agile' environment for developing, designing, unit testing.</li> 
                                <li>Debugging and fixing bugs.</li>
                                <li>Committing code changes into repository by using version control tool(GIT)</li>
                                <li>Familiar in developing a responsive website.</li> 
                                <li>Maintaining coding standards</li>
                            </ul>
                            <div className="responsibilityMob">
                                <p>Worked in 'Agile' environment for developing, designing, unit testing.</p> 
                                <p>Debugging and fixing bugs.</p>
                                <p>Committing code changes into repository by using version control tool(GIT)</p>
                                <p>Familiar in developing a responsive website.</p> 
                                <p>Maintaining coding standards</p>
                            </div>
                        </Row>
                    </Col>
                </Fade>
                {/* animation to 2st div */}
                <Fade right>
                    {/* details of second div */}
                    <Col>
                        <img src={DeveloperImg} style={{width:"100%"}} alt="developer_image"></img>
                    </Col>
                </Fade>
            </Row>
        </React.Fragment>
    )
}
