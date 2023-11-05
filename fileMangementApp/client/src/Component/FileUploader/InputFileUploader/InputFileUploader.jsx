import React from "react";

const InputFileUploader = ({handleDrop}) => {
  return (
    <>
      <label htmlFor="file">Select file or Drag and drop a PDF file here</label>
      <input
        type="file"
        onChange={(e) => handleDrop(e.target.files[0])}
        id="file"
        style={{ display: "none" }}
      />
    </>
  );
};

export default InputFileUploader;
