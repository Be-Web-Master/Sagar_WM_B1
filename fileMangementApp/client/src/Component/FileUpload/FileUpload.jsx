import React, { useEffect, useState } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import Carousal from "../Carousal/Carousal";
import "./FileUpload.css";
import { deleteImageApi, getImagesApi, uploadImageApi } from "../../Api/api";

const FileUpload = () => {
  const [imageList, setImageList] = useState([]);
  const defaultImage =
    "https://accordelectrotechnics.in/img/product/no-preview/no-preview.png";

  const onFileDrop = (file) => setImageList([...file, ...imageList]);

  const onDelete = async (files) => setImageList(files);
  const onSave = async (file) => {
    try {
      await uploadImageApi(file.data);
      alert("Image uploaded successfully");
    } catch (error) {
      alert("Unable to upload image");
    }
  };

  return (
    <div>
      <DragAndDrop title="Drop any File" onFileDrop={onFileDrop} />
      <Carousal
        imageList={imageList}
        onDelete={onDelete}
        defaultImage={defaultImage}
        onSave={onSave}
      />
      <Card />
    </div>
  );
};

const Card = () => {
  const img = useSelector((state) => state.file.images);
  const [isFlag, setIsFlag] = useState(false);

  const dispatch = useDispatch();
  const getImg = async () => {
    const data = await getImagesApi();
    dispatch(setImages(data));
  };
  const deletCard = (publicId) => {
    deleteImageApi(publicId);
    getImg();
  };

  return (
    <>
      <button onClick={() => getImg()}>GetImages</button>

      {/* <div className="cards">
        {img.map(({ secureUrl, publicId }, idx) => {
          return (
            <div className="card">
              <button onClick={() => deletCard(publicId)}> ❌</button>
              <iframe key={idx} src={secureUrl} alt="" />
            </div>
          );
        })}
      </div> */}
    </>
  );
};


export default FileUpload;
