import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "react-view-pdf";

import myResume from "../resume.pdf";

export default function Resume() {
  const [shown, setShown] = useState(false);
  const resume = myResume;

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
      <div>
        <PDFViewer url={resume} />
      </div>
    </div>
  );

  return (
    <div>
      <button
        style={{
          backgroundColor: "rgba(59, 130, 246, 1)",
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
