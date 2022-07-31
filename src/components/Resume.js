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
        left: 0,
        position: "fixed",
        top: 0,
        height: "100%",
        width: "100%",
        zIndex: 99,
      }}
    >
      <div className="flex items-center h-20 p-1 bg-gray-700">
        <button
          className="px-3 py-2 ml-8 text-white bg-indigo-500 border-0 rounded"
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
        className="px-3 py-2 text-white bg-indigo-500 border-0 rounded cursor-pointer"
        onClick={() => setShown(true)}
      >
        Resume
      </button>
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </div>
  );
}
