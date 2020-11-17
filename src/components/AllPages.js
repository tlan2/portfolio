// Code borrowed from: https://gist.githubusercontent.com/Sahero/5ebd7e9977322cc949b05a2410e4b7a9/raw/dd4bf560fe3df02a814d36ad529ab8eff0c5ea01/all-pages.js

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
    <div>
        <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
        </Document>
      
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// export default function AllPages(props) {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const { pdf } = props;

//   return (
//     <Document
//       file={pdf}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={onDocumentLoadSuccess}
//       onLoadError={console.error}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// }