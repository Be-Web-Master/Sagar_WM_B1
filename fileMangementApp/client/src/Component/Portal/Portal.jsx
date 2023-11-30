import { createPortal } from "react-dom";
import PdfViewer from "../PdfPreview/PdfViewer.jsx";
import "./Portal.css";
const defaultFunction = () => {};
export default function Portal({
  file = "",
  removeFile = defaultFunction,
  saveFile = defaultFunction,
  leftBtn,
  rightBtn,
}) {
  return (
    <div className="portal">
      {createPortal(
        <PdfViewer
          rightBtn={rightBtn}
          leftBtn={leftBtn}
          removeFile={removeFile}
          saveFile={saveFile}
          file={file}
        />,
        document.body
      )}
    </div>
  );
}
