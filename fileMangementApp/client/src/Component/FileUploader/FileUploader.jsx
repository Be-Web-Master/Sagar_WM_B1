import React, { useEffect, useState } from "react";
import "./FileUploader.css";
import Portal from "../Portal/Portal";
import InputFileUploader from "./InputFileUploader/InputFileUploader";
import { uploadImageApi } from "../../Api/api";
import Card from "../Card/Card";
import { render } from "react-dom";

function FileUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const leftBtn = "Save";
  const rightBtn = "Cancel";
  const [isRender, setIsRender] = useState(null);

  const handleDrop = (droppedFile) => {
    setIsDragging(false);
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setIsRender(!isRender);
    } else {
      alert("Please drop a PDF file.");
    }
  };
  const removeFile = () => {
    setFile(null);
  };
  const saveFile = async () => {
    try {
      await uploadImageApi(file);
      setIsRender(!render);
      alert("Image uploaded successfully");
    } catch (error) {
      alert("Image is Not Uploaded\nSomething Wrong\n" + error);
    }
  };

  return (
    <>
      <div
        className={`file-drop-zone ${isDragging ? "dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(e.dataTransfer.files[0]);
        }}
      >
        {file ? (
          <div>
            <p>PDF File Selected</p>
            <p>{file.name}</p>
          </div>
        ) : (
          <>
            <InputFileUploader handleDrop={handleDrop} />
          </>
        )}
        {file && (
          <Portal
            leftBtn={leftBtn}
            rightBtn={rightBtn}
            removeFile={removeFile}
            saveFile={saveFile}
            file={URL.createObjectURL(file)}
          />
        )}
      </div>
      <Card isRender={isRender} setIsRender={setIsRender} />
    </>
  );
}

export default FileUploader;
