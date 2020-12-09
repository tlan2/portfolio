import React, {useState} from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import {
        Image,
        Row
       } from 'react-bootstrap';
import resume from '../lancaster_resume.pdf';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <Row className="justify-content-md-center row">
                <Image src="https://ik.imagekit.io/tlan2/DSC03109v1.1_zE07EZ2zI.png" className="border" id="aboutPicture" fluid/>
            </Row>
            <p className="mt-1 text-center font-italic font-smaller">Me in Patagonia, Chile circa 2013</p>
            <Content>
                <div className="mt-2" id="about">
                    <h3 className="mt-0 text-primary">...The Programmer</h3>
                    <p className="mt-3">All things tech always fascinated me. As a child, I would stay inside and play with the 
                        Macintosh Classic while all the other kids played outside. Later, I became the “computer guy” at my house 
                        fixing and setting up all our technical needs. While earning a <span className="bold black">business IT degree</span> at <a href="https://www.calpoly.edu/about" target="_blank"><span className="bold green">Cal Poly-San Luis Obispo</span></a>, 
                        I remember how satisfying it was to complete my programming projects. I have always enjoyed 
                        problem-solving with technology.</p>
                    <p>I recently completed my <span className="bold black">masters</span> in <span className="bold black">computer science</span> from&nbsp;  
                        <a href="https://www.pdx.edu/computer-science/" target="_blank"><span className="bold green">Portland State University</span></a> 
                        &nbsp;in August 2020. I have completed projects using 
                        <span className="bold black"> Python</span>,
                        <span className="bold black"> Java</span>,
                        <span className="bold black"> JavaScript</span>,
                        <span className="bold black"> HTML</span>,
                        <span className="bold black"> CSS</span>,
                        <span className="bold black"> React</span>, and 
                        <span className="bold black"> SQL</span>. I am now actively seeking <span className="bold">software engineer </span> 
                        and <span className="bold">full-stack developer roles</span>. My goal is to become a software developer that 
                        positively affects the work environment and produces meaningful products and services that make people’s 
                        lives a little bit better.</p>
                    <h3 className="mt-1 text-primary">...The Professional</h3>
                    <p>Previously, I lived and worked in&nbsp;
                        <a href="https://en.wikipedia.org/wiki/Santiago" target="_blank"><span className="bold black">Santiago, Chile</span></a>, 
                        discerned a religious calling, and formally studied Spanish and philosophy. I also worked in Big 4 accounting, education, and banking industries.
                        According to Strengthsfinders assessment, my strengths are&nbsp;
                        <a href="https://www.gallup.com/cliftonstrengths/en/252152/analytical-theme.aspx" target="_blank"><span className="bold black">Analytical</span></a>,&nbsp;
                        <a href="https://www.gallup.com/cliftonstrengths/en/252161/arranger-theme.aspx" target="_blank"><span className="bold black">Arranger</span></a>,&nbsp;
                        <a href="https://www.gallup.com/cliftonstrengths/en/252266/includer-theme.aspx" target="_blank"><span className="bold black">Includer</span></a>,&nbsp;
                        <a href="https://www.gallup.com/cliftonstrengths/en/252254/harmony-theme.aspx" target="_blank"><span className="bold black">Harmony</span></a>,&nbsp;
                        <a href="https://www.gallup.com/cliftonstrengths/en/252320/responsibility-theme.aspx" target="_blank"><span className="bold black">Responsibility</span></a>.
                    </p>
                    <h3 className="mt-1 text-primary">...The Person</h3>
                    <p> 
                       I am a husband, father, brother, traveler, volunteer, yoga enthusiast, reader, and hiker. 
                    </p>

                </div>
            </Content>
        </div>
    );
}

export default AboutPage;