import React, {useState} from 'react';
// import Hero from '../components/Hero';
// import Content from '../components/Content';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
        Col,
        Container,
        Image,
        Row
        } from 'react-bootstrap';
import {
            Carousel,
            CarouselItem,
            CarouselControl,
            CarouselIndicators
        } from 'reactstrap';


const items = [
    {
        text: 'I had the opportunity to work with Tom during his time at KPMG and was impressed with his professionalism, interpersonal skills, and dedication to continuous learning. Tom demonstrated his commitment to our clients by getting the job done on time and at a high level of quality. And as a reflection of his character, his work was always done with a smile on his face. I would welcome the opportunity to work with him again as well as recommend him to anyone looking for a dependable addition to their team.',
        author: 'Sarah Mize, Privacy Program Manager',
        linkedIn:"https://www.linkedin.com/in/sczabala/"
    },
    {
        text: 'It\'s rare to find someone as easy to work with. I\'ve had the pleasure of knowing Tom for several years, collaborating on several projects. I can honestly say he is one of the most positive, most solution-seeking individuals I\'ve ever worked with. I am always impressed by how he can take a challenging problem and attack it with such thoughtful, focused, energy. He is truly an asset to have on any team!',
        author: 'Franklin Trujillo, Technical Program Manager at Waymo',
        linkedIn: "https://www.linkedin.com/in/franklintrujillo1/"
    },
    {
        text: 'During his time at Wells Fargo, Thomas strived to improve his performance in all aspects of the job. He is professional, dependable and diligent. Beyond that, he has a positive attitude that helps team morale.I recommend Thomas for any future opportunity. As a dedicated employee and an all-around great person, I know that he will be a beneficial addition to any organization.',
        author: 'Ben Vest, Branch Manager at Wells Fargo',
        linkedIn: "https://www.linkedin.com/in/benjamin-vest-a6464995/"
    },
    {
        text: 'As the second youngest student in our class, Tom performed exceptionally well. He organized group studies, introduced new study methods to better prepare for class assignment and exams, and really brought a sense of joy and clear thinking to the classroom. Tom is a man of integrity and ingenuity. He is a pleasure to work with and has excellent interpersonal skills. Tom is an individual who is persistent, dedicated, and has a keen attention to detail. His leadership skills go beyond the classroom. While in seminary he actively sought out leadership roles within the student body and was proactive in getting things done. I am confident that Tom will be a valuable asset to any team that hires him.',
        author: 'Gerardo Vazquez, Former Aerospace Engineer & Current Seminarian',
        linkedIn: "https://www.linkedin.com/in/gvazquez1/"
    },
    {
        text: 'Thomas is a proactive and dedicated person with strong interpersonal skills. Quick learner who likes to understand the ins and outs of his tasks to be of valid support to the team. He is not only professional but inclusive and friendly, which is a tremendous asset while working with people of different cultures and backgrounds. He is a skilled mediator.',
        author: 'Marketa Zemcakova, Coach and Facilitator',
        linkedIn:"https://www.linkedin.com/in/marketazemcakova/"
    },
    {
        text: 'Tom is naturally outgoing, friendly and a diligent worker. The willingness to do the important work of discerning one’s vocation takes heart, patience and deep faith in mystery. The academics at St. Patrick’s are rigorous and study time is limited. By using his natural gifts of leadership and prudence, Tom organized and led our class in study groups before our mid-term and final exams. Tom kept us efficient, organized and on point. Tom’s a man of integrity, and more so because he has gone through the transformative process of discerning his calling. I am confident that he will make an excellent contribution to any future business organization.',
        author: 'Zach Alspaugh, Owner of Alspaugh Films & Current Seminarian',
        linkedIn: "https://www.linkedin.com/in/zach-alspaugh-1ab6163b/"
    }
    
    ];

function HomePage(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            className="bg-secondary text-white mt-2 px-3 align align-items-center justify-content-center"
        >
            <p className="px-5 pt-4">{item.text}</p>
            <p className="text-right font-italic px-5 pb-5">- {item.author}
                {/* <Link to={item.linkedIn} target="_blank"><FaLinkedin size="40px"/></Link>  */}
            </p>
        </CarouselItem>
        );
  });

    return(
            <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h2 className="text-center" id="homeHeader">Hi, I'm Tom.</h2>
                    <Image src="https://ik.imagekit.io/tlan2/headshot_VbGpzjweL.png" id="homePicture"/>
                    <h4 className="mt-0 text-center">Software Engineer, former Business Professional.</h4>
                    {/* <h4 className="text-center font-italic">Seeking Entry-Level Programming Positions</h4> */}
                </Col>
            </Row>

            <Row className="justify-content-md-center mt-3">
                <Col>
                    <h4 className="text-center" id="homeHeader">What Others Say About Me:</h4>
                    <Carousel
                        interval={null}
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl className="" direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
            </Container>
        
    );

}

export default HomePage;