import { createPortal } from "react-dom";
import PdfViewer from "../PdfPreview/PdfViewer.jsx";

const defaultFunction = () => {}
export default function Portal({
  file = "",
  removeFile = defaultFunction,
  saveFile = defaultFunction,
}) {

  return (
    <>
      {createPortal(
        <PdfViewer removeFile={removeFile} saveFile={saveFile} file={file}/>,
        document.body
      )}
    </>
  );
}
