// author kiran
import React from 'react';
import Project from './Project';
import NavBar from './NavBar';
import Language  from './Language';
import Experience from './Experience';
import Contact from './Contact';
import $ from 'jquery';
import Download from './Download';
import About from './About';
import Fade from 'react-reveal/Fade';
import Gallery from './Gallery';
import Jump from 'react-reveal/Jump';

export default function Portfolio() {
    
    $('#experience , #project , #language , #download , #contact ').click(function(){
        $(document).scrollTop(100) 
    });
  
    return (
        <React.Fragment> 

            {/* Header starts*/}

                {/* Navbar section */}
                <section>
                    <NavBar />
                </section>

             {/* Header ends*/}

            {/* Body starts*/}  
               
                <div className="container">
                    {/* About section */}
                    <section id="about"> 
                        <About />
                    </section>
                    {/* Experience section */}
                    <section id="experience">
                        <Experience />
                    </section>
                    {/* Language known section */}
                    <section id="language" >
                        <Language />
                    </section>
                    {/* Project section */}
                    <section  id="project"> 
                        <Project />
                    </section>
                     {/* Gallery section */}
                     <section id="gallery">
                        <Gallery />
                    </section>
                    {/* Download section */}
                    <Fade right duration={4000} delay={1000}>
                        <Jump duration={4000} delay={1000}>
                            <section id="download">
                                <Download />
                            </section>
                        </Jump>
                    </Fade>
                </div>
            {/* Body ends */}
           
            {/* Footer */}
            <Fade bottom>
                <section id="contact">
                    <Contact />
                </section>
            </Fade>
            {/* Footer ends */}
     
        </React.Fragment>
    )
}