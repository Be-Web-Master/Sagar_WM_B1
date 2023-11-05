import React, { useState } from "react";
import "./PdfViewer.css";
import Portal from "../Portal/Portal";
const defaultFunction = () => {};
function PdfViewer({
  file,
  removeFile = defaultFunction,
  saveFile = defaultFunction,
  leftBtn = "Cancel",
  rightBtn = "Save",

}) {
  const [isPdfOpen, setIsPdfOpen] = useState(true);

  const closePdf = () => {
    setIsPdfOpen(false);
    removeFile();
  };
  const savePdf = () => {
    saveFile();
    closePdf();
  };
  return (
    <div>
      {isPdfOpen && (
        <div className="pdf-preview">
          <iframe title="PDF Viewer" src={file} width="100%" height="500px" />
          <div className="button-container">
            <button  onClick={savePdf}>{rightBtn}</button>
            <button onClick={closePdf}>{leftBtn}</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default PdfViewer;
