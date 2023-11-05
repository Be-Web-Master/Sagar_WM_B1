import React, { useState } from "react";
import "./DragAndDrop.css"
const DragAndDrop = ({ title, onFileDrop }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const onDrop = (files) => {
    const fileList = Object.values(files).map((file) => {
      return {
        url: URL.createObjectURL(file),
        data: file,
      };
    });
    onFileDrop(fileList);
  };
  return (
    <div
      onDrop={(e) => {
        e.preventDefault();
        onDrop(e.dataTransfer.files);
        setIsDragActive(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragActive(true);
      }}
      onDragLeave={() => setIsDragActive(false)}
      className={`drag-n-drop-container ${
        isDragActive && "drag-input-container-active"
      }`}
    >
      <label
        htmlFor="drag-file"
        className={`drap-n-drop-input-label ${
          isDragActive && "drag-input-label-active"
        }`}
      >
        {title}
      </label>
      <input
        type="file"
        id="drag-file"
        onChange={(e) => onDrop(e.target.files)}
        style={{ display: "none" }}
        multiple
      />
    </div>
  );
};

export default DragAndDrop;
