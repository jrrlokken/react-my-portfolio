import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";

import myResume from "../resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [shown, setShown] = useState(false);
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  const resume = myResume;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        overflow: "hidden",

        /* Fixed position */
        left: 0,
        position: "fixed",
        top: 0,

        /* Full window size */
        height: "100%",
        width: "100%",

        /* Display on top of other elements */
        zIndex: 99,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        {/* <div style={{ marginRight: "auto" }}>sample-file-name.pdf</div> */}
        <button
          style={{
            backgroundColor: "#357edd",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>
      <div style={{ flexGrow: 1, overflow: "auto" }}>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "2rem" }}>
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );

  return (
    <div>
      <button
        style={{
          backgroundColor: "#00449e",
          border: "none",
          borderRadius: ".25rem",
          color: "#fff",
          cursor: "pointer",
          padding: ".5rem",
        }}
        onClick={() => setShown(true)}
      >
        Resume
      </button>
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </div>
  );
}
