import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "react-view-pdf";

import myResume from "../resume.pdf";

export default function Resume() {
  const [shown, setShown] = useState(false);
  const resume = myResume;

  const modalBody = () => (
    <div className="fixed top-0 left-0 z-50 flex-col w-full h-full overflow-hidden bg-white">
      <div className="flex items-center h-20 p-1 bg-[#334155]">
        <button
          className="px-4 py-2 ml-8 text-white bg-indigo-500 border-0 rounded"
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
