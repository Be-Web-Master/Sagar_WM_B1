import React, { useState } from "react";
import "./PdfViewer.css";

const defaultFunction = () => {};
function PdfViewer({
  file,
  removeFile = defaultFunction,
  saveFile = defaultFunction,
  leftBtn,
  rightBtn,
}) {
  const [isPdfOpen, setIsPdfOpen] = useState(true);

  const closePdf = () => {
    setIsPdfOpen(false);
    removeFile();
  };
  console.log({rightBtn});
  console.log({leftBtn});

  const savePdf = () => {
    saveFile();
    if (leftBtn === "close") {
      closePdf();
    }
  };

  return (
    <div>
      {isPdfOpen && (
        <div className="pdf-preview">
          <iframe title="PDF Viewer" src={file} width="100%" height="500px" />
          <div className="button-container">
            <button onClick={savePdf}>{leftBtn}</button>
            <button onClick={closePdf}>{rightBtn}</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default PdfViewer;
