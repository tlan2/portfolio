import React, {useState} from 'react';
import Content from '../components/Content';
import {
        Image,
        Row
       } from 'react-bootstrap';
import resume from '../lancaster_resume.pdf';

function AboutPage(props) {

    return(
        <div>
            <h1 className="text-center" id="aboutHeader">About Me</h1>
            <Row className="justify-content-md-center row">
                <Image src="https://ik.imagekit.io/tlan2/DSC03109v1.1_zE07EZ2zI.png" className="border" fluid/>
            </Row>
            <p className="mt-1 text-center font-italic font-smaller">Patagonia, Chile</p>
            <Content>
                <div className="mt-3" id="about">
                    <p>Before joining the world of <span id="highlight">coding</span>, I studied <span id="boldBlue">business</span>,
                    <span id="boldBlue"> information systems</span>, and <span id="boldBlue">philosophy</span>.
                    Previously, I worked in <span id="boldBlue">Big 4 accounting</span>, <span id="boldBlue">education</span>, 
                    and <span id="boldBlue">banking</span>.</p>
                    <p className="mt-3">All things <span id="highlight">tech</span> always fascinated me. As a child, I would stay inside and play with the 
                        Macintosh Classic while all the other kids played outside. Later, I became the “computer guy” at my house 
                        fixing and setting up all our technical needs. While earning a business IT degree at <a href="https://www.calpoly.edu/about" target="_blank"><span id="boldGreen">Cal Poly-San Luis Obispo</span></a>, 
                        I remember how satisfying it was to complete my
                        <span id="boldBlue"> C#</span> and <span id="boldBlue">Visual Studio</span> projects. I have always enjoyed 
                        problem-solving with technology. After living abroad in Santiago, Chile and exploring a religious calling, I decided 
                        to pursue this passion by completing a master’s degree in <span id="boldBlue">computer science</span> from <a href="https://www.pdx.edu/computer-science/" target="_blank"><span id="boldGreen">Portland State University</span></a> in August 2020.</p>
                    {/* <p className="my-3">Let’s connect on <a href="https://www.linkedin.com/in/thomasmorelancaster/" target="_blank">LinkedIn</a> or check out my <a href="/projects" target="_blank"><span id="boldBlue">Projects</span></a> and <a href="" onClick={() => window.open(resume)} target="_blank"><span id="boldBlue">Resume</span></a>!</p> */}
                </div>
            </Content>
        </div>
    );
}

export default AboutPage;