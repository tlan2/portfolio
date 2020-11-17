import React from 'react';
// import Hero from '../components/Hero';
// import Content from '../components/Content';
// import { Document } from '@react-pdf/renderer';

import AllPagesPDFViewer from "../components/AllPages";

import resume from '../assets/pdf/resume_website.pdf';

function ResumePage(props) {

    return(
        <div className="App">
            <h4>Resume</h4>
            <div className="all-page-container">
                <AllPagesPDFViewer pdf={resume} />
            </div>
            <hr />
        </div>
    );

}

export default ResumePage;