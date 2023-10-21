import React, { useState } from 'react';
import { SectionWrapper } from "../hoc";
import { Document, Page } from 'react-pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        file="./assets/resume/Resume_Samrat_Baral.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default SectionWrapper(Resume, "resume");
