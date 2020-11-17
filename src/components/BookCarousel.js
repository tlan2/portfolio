import React from 'react';

import Card from './BookCard';

import howToWinFriends from '../assets/images/books/howToWinFriends.jpg';
import likeabilityFactor from '../assets/images/books/likeabilityFactor.jpg';
import phoenixProject from '../assets/images/books/phoenixProject.jpg';
import sprint from '../assets/images/books/sprint.jpg';
import digitalMind from '../assets/images/books/digitalMind.jpg';
import strengthsFinders from '../assets/images/books/strengthsfinder.jpg';
import fluentForever from '../assets/images/books/fluentForever.jpg';
import personalMBA from '../assets/images/books/personalMBA.jpg';
import zenMotorcyle from '../assets/images/books/zenMotorcycle.jpg';
import readBook from '../assets/images/books/readBook.jpg';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class BookCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'How to Win Friends and Influence People',
                    subTitle: 'Enhanced My Social Skills',
                    imgSrc: howToWinFriends,
                    link: 'https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People',
                    selected: false
                },
                {
                    id: 1,
                    title: 'The Likeability Factor',
                    subTitle: 'Learned the Importance of Being Likeable',
                    imgSrc: likeabilityFactor,
                    link: 'https://timsanders.com/books/likeability-factor/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'The Phoenix Project',
                    subTitle: 'Learned about the Relationships between Business and IT',
                    imgSrc: phoenixProject,
                    link: 'https://itrevolution.com/the-phoenix-project/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Sprint',
                    subTitle: 'Learned the Most Efficient Way to Test Ideas',
                    imgSrc: sprint,
                    link: 'https://www.thesprintbook.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'The Personal MBA',
                    subTitle: 'Learned Essentials of Successful Businesses',
                    imgSrc: personalMBA,
                    link: 'https://personalmba.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Fluent Forever',
                    subTitle: 'Learned the Science of Learning a New Language',
                    imgSrc: fluentForever,
                    link: 'https://fluent-forever.com/app/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'The Digital Mind',
                    subTitle: 'Learned How the History of Science and Technology are Converging',
                    imgSrc: digitalMind,
                    link: 'https://mitpress.mit.edu/books/digital-mind',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Strengths Finders v2.0',
                    subTitle: 'Learned What My Strengths are and How to Implement Them',
                    imgSrc: strengthsFinders,
                    link: 'https://www.gallup.com/cliftonstrengths/en/252137/home.aspx',
                    selected: false
                },
                {
                    id: 8,
                    title: 'How To Read A Book',
                    subTitle: 'Learned How to Extract the Most Value out of Any Book',
                    imgSrc: readBook,
                    link: 'https://en.wikipedia.org/wiki/How_to_Read_a_Book',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Zen and the Art of Motorcycle Maintenance',
                    subTitle: 'Learned the Importance of Focusing on One Task at a Time',
                    imgSrc: zenMotorcyle,
                    link: 'https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default BookCarousel;