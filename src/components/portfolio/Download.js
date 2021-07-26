import React from 'react'
import Row from 'react-bootstrap/Row';
import DownloadIcon from '../../images/download.jpeg';
import DownloadGif from '../../images/dwnld.gif';
import Container from 'react-bootstrap/Container';
import Resume from '../../images/kiranResume-2.pdf';

export default function Download() {
    
    // hiding dowload image and showing download gif
    const handleClick = () => {
        document.querySelector('.downloadGif').style.display="block";
        document.querySelector('.downloadIcon').style.display="none";
        // refreshing current page
        setTimeout(()=> {
            window.location.reload();
        },5000)
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <a href={Resume} download><img className="downloadIcon" onClick={handleClick} src={DownloadIcon} alt="download"></img></a>
                    <img className="downloadGif" src={DownloadGif} alt="download"></img>
                </Row>
            </Container>
        </div>
    )    
}
