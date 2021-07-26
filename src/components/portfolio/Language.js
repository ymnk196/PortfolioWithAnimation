import React from 'react';
import Row from 'react-bootstrap/Row';
import Sixteen from '../../images/atom.jpeg';
import Fifteen from '../../images/visualstudio.jpeg';
import Fourteen from '../../images/phpstorm.jpeg';
import Thirteen from '../../images/github.png';
import Twelve from '../../images/windows.jpeg';
import Eleven from '../../images/linux.jpeg';
import Ten from '../../images/sql.png';
import Nine from '../../images/postgresql.png';
import Eight from '../../images/laravel.png';
import Seven from '../../images/java.png';
import Six from '../../images/php1.jpeg';
import Five from '../../images/css.png';
import Four from '../../images/html.png';
import Three from '../../images/bootstrap.jpeg';
import Two from '../../images/vue.png';
import One from '../../images/react.png';
import Col from 'react-bootstrap/Col';
import DeveloperImg from '../../images/12.jpg';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
// import img4 from '../../images/6.jpg';
// import img3 from '../../images/4.jpg';
// import img2 from '../../images/3.jpg';
// import img1 from '../../images/10.jpg';
import $ from 'jquery';

export default function Language() {
    $(document).ready(function(){
        animateDiv('.aa');
        animateDiv('.ab');
        animateDiv('.ac'); 
        animateDiv('.ad');
        
    });
    
    function makeNewPosition(){
        var height = $(window).height() - 100;
        var width = $(window).width() - 100;
        var nh = Math.floor(Math.random() * height);
        var nw = Math.floor(Math.random() * width);
        return [nh,nw];      
    }
    
    function animateDiv(myclass){
        var newq = makeNewPosition();
        $(myclass).animate({ top: newq[0], left: newq[1] }, 3000,   function(){
          animateDiv(myclass);        
        });   
    };

    return (
        <React.Fragment>
            {/* Heading  */}
            {/* <Row>
                <div></div>
                <img className=".aa" src={img1} alt="languages" />
                <img className=".ab" src={img2} alt="languages" />
                <img className=".ac" src={img3} alt="languages" />
                <img className=".ad" src={img4} alt="languages" />
            </Row> */}
            {/* details of language known */}
            <Row xs={1} md={1} lg={2} className="mt-5">
                <Fade left>
                    <Col>
                        <div className="main">
                            <img className="mainImg" src={DeveloperImg} alt="languages" />
                            <div className="item" style={{animationDelay: "-1.5s"}}>
                                <img src={Sixteen} alt="languages"   /> 
                            </div>
                            <div className="item" style={{animationDelay: "-3s"}}>
                                <img  src={Fifteen} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-4.5s"}}>
                                <img  src={Fourteen} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-6s"}}>
                                <img  src={Thirteen} alt="languages"  />
                            </div>
                            <div className="item" style={{animationDelay: "-7.5s"}}>
                                <img  src={Nine} alt="languages" /> 
                            </div>
                            <div className="item" style={{animationDelay: "-9s"}}>
                                <img src={Ten} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-10.5s"}}>
                                <img src={Eleven} alt="languages" /> 
                            </div>
                            <div className="item" style={{animationDelay: "-12s"}}>
                                <img  src={Twelve} alt="languages" /> 
                            </div>
                            <div className="item" style={{animationDelay: "-13.5s"}} >
                                <img src={Six} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-15s"}}>
                                <img  src={Seven} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-16.5s"}}>
                                <img src={Eight} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-18s"}}>
                                <img  src={One} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-19.5s"}}>
                                <img  src={Two} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-21s"}}>
                                <img  src={Three} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-22.5s"}}>
                                <img src={Four} alt="languages" />
                            </div>
                            <div className="item" style={{animationDelay: "-24s"}}>
                                <img src={Five} alt="languages" />
                            </div>
                        </div>
                        <div className="mobileAnimate">
                            <div className="cube-box">
                                <img src={One} alt="cube"/>
                                <img src={Two} alt="cube"/>
                                <img src={Three} alt="cube"/>
                                <img src={Four} alt="cube"/>
                                <img src={Five} alt="cube"/>
                                <img src={Six} alt="cube"/>
                            </div>
                        </div>
                    </Col> 
                </Fade>
              
                <Fade right>
                    <Col className="Exp languages pt-5">
                        <Row className="justify-content-center">
                            <Bounce top cascade>
                                <h4 className="mt-2">Languages Known</h4>
                            </Bounce>
                        </Row>
                        <Row className="justify-content-center">
                            <h5 className="mt-2">Frontend Languages</h5> 
                        </Row>
                        <Row className="justify-content-center">
                            <img src={One} alt="languages" />
                            <img src={Two} alt="languages" />
                            <img src={Three} alt="languages" />
                            <img src={Four} alt="languages" />
                            <img src={Five} alt="languages" />
                        </Row>
                        <Row className="justify-content-center">
                            <h5>Backend Languages</h5>
                        </Row>
                        <Row className="justify-content-center">
                            <img src={Six} alt="languages" />
                            <img src={Seven} alt="languages" />
                            <img src={Eight} alt="languages" />
                        </Row>
                        <Row className="justify-content-center">
                            <h5>Database & OS</h5>
                        </Row>
                        <Row className="justify-content-center">
                            <img src={Nine} alt="languages" /> 
                            <img src={Ten} alt="languages" />
                            <img src={Eleven} alt="languages" /> 
                            <img src={Twelve} alt="languages" />  
                        </Row>
                        <Row className="justify-content-center">
                            <h5>Tools & Version Control</h5> 
                        </Row>
                        <Row className="justify-content-center">
                            <img src={Sixteen} alt="languages" /> 
                            <img src={Fifteen} alt="languages" />
                            <img src={Fourteen} alt="languages" />
                            <img src={Thirteen} alt="languages" />   
                        </Row>
                    </Col>
                </Fade>
            </Row>
        </React.Fragment>
    )
}
