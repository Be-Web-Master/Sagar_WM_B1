import { useCallback, useState } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import Carousal from "../Carousal/Carousal";

const FileUpload = () => {
  const [imagelList, setImageList] = useState([]);

  const onFileDrop = (files) => setImageList([...imagelList, ...files]);
  const onDelete = () => {
    setImageList([...imagelList]);
  };
  const defaultImage =
    "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png";
  return (
    <>
      <Carousal
        onDelete={onDelete}
        imagelList={imagelList}
        defaultImage={defaultImage}
      />
      <DragAndDrop title="Drop any File" onFileDrop={onFileDrop} />
    </>
  );
};

export default FileUpload;
