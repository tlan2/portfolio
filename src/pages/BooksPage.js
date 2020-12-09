import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import BookCarousel from '../components/BookCarousel';

function BooksPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <BookCarousel />
        </div>
    );

}

export default BooksPage;