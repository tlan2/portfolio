import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { 
        Navbar, 
        Nav 
        } from 'react-bootstrap';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BooksPage from './pages/BooksPage';

import resume from './lancaster_resume.pdf';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tom Lancaster',
      headerLinks: [
        {title: 'Home', path: '/portfolio'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'Books', path: '/books'},
      ],
      home: {
        title: 'Hi, I\'m Tom.',
        subTitle: 'Aspiring Programmer.',
        // text: 'Seeking Employment as a Software Engineer or Full-Stack Engineer.'
      },
      about: {
        title: 'About Me....',
      },
      projects: {
        title: 'Projects'
      },
      books: {
        title: 'Books That Influenced Me',
        subTitle: '\"You will be the same person you are today in five years but for two things:  the people you meet and the books you read.\" -Charlie "Tremendous" Jones',
        // text: 'Click on the Cards to See What I Learned from Each Book'
      },
    }
  }
 
  // withTitle function
  render() {
      return (
        <Router>
          <Container className="p-0" fluid={true}> 
            
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              {/* <Navbar.Brand href="/"><img src={logo} id="logo" alt="Logo"/></Navbar.Brand> */}
              <Navbar.Brand href="/portfolio" className="display-1 text-primary font-weight-bolder" id="logo">Tom Lancaster</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls='navbar-toggle' />
              <Navbar.Collapse id="navbar-toggle"> 
                <Nav className="ml-auto font-weight-bold">
                  <Link className="nav-link" to="/portfolio"> HOME</Link>
                  <Link className="nav-link" to="/About"> ABOUT</Link>
                  <Link className="nav-link" to="/Projects"> PROJECTS</Link>
                  <Link className="nav-link" to="/Books"> BOOKS</Link>
                  <Link className="nav-link" onClick={() => window.open(resume)}> RESUME</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/>} />
            <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} text={this.state.projects.text}/>} />
            <Route path="/books" render={() => <BooksPage title={this.state.books.title} subTitle={this.state.books.subTitle} text={this.state.books.text}/>} />

            <Footer/>

          </Container>
        </Router>
    );
  }
}

export default App;
