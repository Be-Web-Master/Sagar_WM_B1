import { useCallback, useState } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import Carousal from "../Carousal/Carousal";

const FileUpload = () => {
  const [imagelList, setImageList] = useState([]);

  const onFileDrop = (files) => setImageList([...imagelList, ...files]);

  return (
    <>
    < Carousal imagelList={imagelList}/>
      <DragAndDrop title="Drop any File" onFileDrop={onFileDrop} />
    </>
  );
};

export default FileUpload;
