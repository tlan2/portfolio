import React from 'react';
import Hero from '../components/Hero';
import { Row } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { MdSlideshow } from "react-icons/md";
import { IconContext } from "react-icons";
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

const trivia = 'https://ik.imagekit.io/tlan2/portfolio/projects/triviaGameplay_-qR4ACH7a.png';
const financialIndependence = 'https://ik.imagekit.io/tlan2/portfolio/projects/uncleBuckScreen_dzEAI2uCXc.png';
const batter = 'https://ik.imagekit.io/tlan2/portfolio/projects/batterOnDeckScreen_B1aPgudPM.png';
const fantasyFootball = 'https://ik.imagekit.io/tlan2/portfolio/projects/fantasyFootballCustom_HvXLe7ygmH.png';
const phoneBill = 'https://ik.imagekit.io/tlan2/portfolio/projects/phoneBill_lfXppecEJn.jpg';
const sftp = 'https://ik.imagekit.io/tlan2/portfolio/projects/agile_FHR2dnfTYq.jpg';
const football = 'https://ik.imagekit.io/tlan2/portfolio/projects/nflFootball_8ambjp6_6e.jpg';
const monopoly = 'https://ik.imagekit.io/tlan2/portfolio/projects/monopoly_uaz2hG4Bn.png';
const trees = 'https://ik.imagekit.io/tlan2/portfolio/projects/treesChart_mrYh6_XB5.png';
const nbaSuccess = 'https://ik.imagekit.io/tlan2/portfolio/projects/nbaPlayerSuccess_ecj8MZP7a.png';
const philia = 'https://ik.imagekit.io/tlan2/portfolio/projects/philiaContact1_kgWy22JiS.png';
const writingSamples = 'https://ik.imagekit.io/tlan2/portfolio/projects/writing_Y6Vi5a636.jpg';

function btnClick(){
    window.open("https://docs.google.com/presentation/d/1UwAhCxk1S88JFmYWC9wHbVYlRMV4RsX_LUnlrJMOSqs/edit#slide=id.ga0a7372a9e_2_0");
}

function ProjectsPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <CardDeck className="mx-3 mb-4">
                <Card>
                    <CardImg top width="100%" src={phoneBill} alt="Card image cap" />
                    <CardBody className="d-flex flex-column">
                    <CardTitle tag="h5">Phone Bill App</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Java &bull; Android</CardSubtitle>
                    <CardText>I developed a phone bill application in my 8-week <i>Advanced Programming with Java</i> course that began as a simple program and
                        became HTTP servlet and fully functional Android app using Test Driven Development.</CardText>
                    <Row className="justify-content-center pt-1">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://github.com/tlan2/PortlandStateJavaSummer2020" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={batter} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Batter On Deck</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript &bull; HTML &bull; CSS-Bootstrap</CardSubtitle>
                    <CardText>I planned, designed, and oversaw a MLB player statistics dashboard that called MLB Data API with 1 other student.</CardText>
                    <Row className="justify-content-center mt-5">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div className="d-flex align-items-end">
                                <a href="http://batter-on-deck.herokuapp.com/" target="_blank">
                                    <FaExternalLinkAlt className="mx-2"/>
                                </a>
                                <a href="https://github.com/tlan2/batterOnDeck" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={monopoly} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Monopoly Simulator</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Python-Pandas</CardSubtitle>
                    <CardText>I coded many features of the popular board game Monopoly and performed a 100-turn simulation with 4 players for my final project in my <i>Modeling and Simulation with R and Python</i> course.</CardText>
                    <Row className="justify-content-center mt-4">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://github.com/tlan2/monopoly_simulation" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={trivia} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Trivia Night</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript &bull; HTML &bull; CSS-Bootstrap</CardSubtitle>
                    <CardText>Along with 2 other CS grad students, I helped build and design a trivia website that made REST Web API calls to Open
                        Trivia Database which allowed the user to decide difficulty, category, and the desired number of questions. I created the logo and implemented key design features.</CardText>
                    <Row className="d-flex align-items-end justify-content-center mt-4">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://best-trivia-game.herokuapp.com/" target="_blank">
                                    <FaExternalLinkAlt className="mx-2"/>
                                </a>
                                <a href="https://github.com/charboltron/trivia_app" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
            </CardDeck>
            <CardDeck className="mx-3 mb-4">
                <Card>
                    <CardImg top width="100%" src={writingSamples} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Writing Samples</CardTitle>
                    <CardText>Here is a PDF file of some my best writing material including my academic paper reviews from Internetworking Protocols, my book report on <i>Sprint</i>, and exam essays.</CardText>
                    <Row className="justify-content-center mt-5">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div className="mt-2">
                                <a href="https://drive.google.com/file/d/1dvH6a35bonSoQhOJbCCbUHktZcv7eCYE/view?usp=sharing" target="_blank">
                                    <GrDocumentPdf/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={fantasyFootball} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Fantasy Football Draft Calculator</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Python-Pandas & Flask &bull; HTML &bull; CSS </CardSubtitle>
                    <CardText>This full-stack program helps fantasy football managers prepare for their 2019 auction drafts. I incorporated Python’s Pandas library to analyze and process 2018 season’s data. Python’s Flask library provides the framework and Python Anywhere hosts the website.</CardText>
                    <Row className="justify-content-center pt-1">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="http://tlan2.pythonanywhere.com/" target="_blank">
                                    <FaExternalLinkAlt className="mx-2"/>
                                </a>
                                <a href="https://github.com/tlan2/FantasyFootballDraftCalculator" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={football} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">NFL Database</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">SQL - Postgres</CardSubtitle>
                    <CardText>I created and implemented an NFL database on Postgres SQL using 10 years' worth of data from FantasyPros.com and Pro-Football-Reference.com. I also performed 20 queries varying in difficulty to find relevant information about pro football players.</CardText>
                    <Row className="justify-content-center pt-1">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://drive.google.com/file/d/1Bh20HlyhlKU4DOhaKU5tdQ7nviwUSWeY/view" target="_blank">
                                    <GrDocumentPdf/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={financialIndependence} alt="Card image cap" />
                    <CardBody className="d-flex flex-column">
                    <CardTitle tag="h5">Uncle Buck</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">React &bull; JavaScript</CardSubtitle>
                    <CardText>A team of 4 students implemented this Full-Stack Web App that helps individuals get an idea of when they can achieve financial independence. I helped implement the calculator form, results, and logo.</CardText>
                    <Row className="justify-content-center mt-5">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div className="mt-4">
                                <a href="https://uncle-buck.herokuapp.com/" target="_blank">
                                    <FaExternalLinkAlt className="mx-2"/>
                                </a>
                                <a href="https://github.com/Team-Uncle-Buck/uncle_buck" target="_blank">
                                    <FaGithub className="mx-2"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>              
            </CardDeck>
            <CardDeck className="mx-3">
                <Card>
                    <CardImg top width="100%" src={trees} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Tree Algorithm Performance Comparison</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Python</CardSubtitle>
                    <CardText>I performed a compare and contrast performance analysis of B-Trees, Red-Black Trees, and Binary Search Trees (BST) for my graduate algorithms course final project report. I modified some Python code to perform run-time tests on the insert, search, and delete operations of each search tree. I used datasets of random integers up to 1,000,000 so that the performance differences were clearly shown.</CardText>
                    <Row className="justify-content-center pt-1">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://drive.google.com/file/u/1/d/15tfnANoty4ZpfQTqUiNw9XIQhUfkCtN-/view?usp=sharing" target="_blank">
                                    <GrDocumentPdf/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={nbaSuccess} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">NBA Player Success Predictions</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Python &bull; Machine Learning</CardSubtitle>
                    <CardText>Along with 3 other CS grad students, I investigated the relationship between NBA draft prospects' data and career success using Logistic Regression, SVM, and Random Forest machine learning algorithms.</CardText>
                    <Row className="justify-content-center mt-5">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div className="mt-3">
                                <a href="https://drive.google.com/file/d/1QHhDfsRr5N9LZQ7PUE9f1_CREOR3ZaXv/view" target="_blank">
                                    <GrDocumentPdf/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={sftp} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">SFTP Client</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Java &bull; Agile</CardSubtitle>
                    <CardText>A team of six computer science students and I implemented the Agile process methodology to create an SFTP client in Java. We performed weekly stand-ups (to simulate daily stand-ups), picked up different stories or features, and coded them.</CardText>
                    <Row className="justify-content-center mt-5">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div className="mt-5">
                                <a href="https://github.com/charboltron/ftp_client_server" target="_blank">
                                    <FaGithub className="mx-2 mt-1"/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={philia} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Philia</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">UX</CardSubtitle>
                    <CardText>Along with 3 other students, we created and developed a mobile app prototype that helps maintain long-distance relationships.
                          We reviewed academic papers, interviewed potential users, produced storyboards and designed a prototype.</CardText>
                    <Row className="d-flex align-items-end justify-content-center pt-1">
                        <IconContext.Provider
                            value={{
                                size: "2.25em",
                                className: "icons"
                            }}
                        >
                            <div>
                                <a href="https://docs.google.com/presentation/d/1UwAhCxk1S88JFmYWC9wHbVYlRMV4RsX_LUnlrJMOSqs/edit#slide=id.ga0a7372a9e_2_0" target="_blank">
                                    <MdSlideshow/>
                                </a>
                            </div>
                        </IconContext.Provider>
                    </Row>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );

}

export default ProjectsPage;