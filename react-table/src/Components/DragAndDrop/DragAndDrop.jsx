import { useEffect, useState } from "react";
import "./DragAndDrop.css";
const DragAndDefault = ({ title = "Select File", onFileDrop }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
  // console.log(files);
    const fileList = Object.values(files).map((elm) => {
      return URL.createObjectURL(elm)
    });
    onFileDrop(fileList);
  };
  const onDropOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };
  return (
    <>
      <div
        onDrop={onDrop}
        onDragLeave={() => setIsDragActive(false)}
        onDragOver={onDropOver}
        className={`drag-n-drop ${isDragActive && `when-drag-are-occur`}`}
      >
        <input type="file" id="drag-n-drop-input"  />
        <label className="drag-n-drop-label" htmlFor="drag-n-drop-input">
          {title}
        </label>
      </div>
    </>
  );
};

export default DragAndDefault;
