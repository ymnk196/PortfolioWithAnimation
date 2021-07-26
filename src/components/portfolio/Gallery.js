import React from 'react'
import Row from 'react-bootstrap/Row';
import Four from '../../images/6.jpg';
import Three from '../../images/4.jpg';
import Two from '../../images/3.jpg';
import One from '../../images/10.jpg';
import Jump from 'react-reveal/Jump';

export default function Gallery() {
    return (
        <React.Fragment>
            <Row xs={2} md={4} lg={4} className="justify-content-center align-items-center gallery">
                <Jump duration={4000} delay={1000}>
                    <img src={One} className="p img1 galleryImg" alt="gallery_img"/>
                </Jump>
                <Jump  duration={4000} delay={2000}>
                    <img  src={Two} className="p img2 galleryImg" alt="gallery_img"/>
                </Jump>
                <Jump duration={4000} delay={3000}>
                    <img  src={Three} className="p img3 galleryImg" alt="gallery_img"/>
                </Jump>
                <Jump  duration={4000} delay={4000}>
                    <img   src={Four} className="p img4 galleryImg" alt="gallery_img"/>  
                </Jump>                 
            </Row>
        </React.Fragment>
    )
}
