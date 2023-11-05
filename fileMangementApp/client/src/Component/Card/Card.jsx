import React, { useState, useEffect } from "react";
import { deleteImageApi, getImagesApi, uploadImageApi } from "../../Api/api";
import { useSelector, useDispatch } from "react-redux";
import { setImages } from "../../redux/imageSlice";
import "./Card.css";
import Portal from "../Portal/Portal";

const Card = () => {
  const img = useSelector((state) => state.file.images);
  const [isLoading, setIsLoading] = useState(false);
  const [isPdfModal, setIsPdfModal] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImagesApi();
      dispatch(setImages(data));
      setCount(count + 1);
    };
    fetchData();
  }, [isLoading]);
  const deletCard = (publicId) => {
    console.log("publicId");
    // deleteImageApi(publicId);
    setIsLoading(!isLoading);
    setIsPdfModal(!isPdfModal);
  };
  const nameFormater = (name) => name.split(".")[0];
  const sizeFormater = (bytes) => {
    let result = "";
    if (bytes < 1024) result = bytes + " B";
    else if (bytes < 1024 * 1024) result = (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1024 * 1024 * 1024)
      result = (bytes / (1024 * 1024)).toFixed(2) + " MB";
    return result;
  };
  return (
    <>
      <div className="cards">
        {img.map((data, idx) => {
          const { secureUrl, publicId, name, size } = data;
          return (
            <>
              <div onClick={() => deletCard()} className="card">
                <span className="card-text">Name : {nameFormater(name)}</span>
                <span className="card-text">Size : {sizeFormater(size)}</span>
                <iframe key={idx} src={secureUrl} width="100%" />
              </div>
            </>
          );
        })}
        {/* {isPdfModal && (
          <Portal
            // file={secureUrl}
            deletCard={deletCard}
            rightBtn={"Close"}
            leftBtn={"Delete"}
          />
        )} */}
      </div>
    </>
  );
};

export default Card;

function PdfPreview() {
  return <></>;
}
{
  /* <FileList files={img} deletCard={deletCard} />

  const FileList = ({ files, deletCard }) => {
    const [sortOption, setSortOption] = useState("default");

    const handleSortChange = (event) => {
      setSortOption(event.target.value);
    };

    const sortedFiles = [...files];

    if (sortOption === "name") {
      sortedFiles.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "size") {
      sortedFiles.sort((a, b) => b.size - a.size);
    } else if (sortOption === "date") {
      sortedFiles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return (
      <div>
        <label>Sort by: </label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="size">Size</option>
          <option value="date">Date</option>
        </select>
        <div className="cards">
          {sortedFiles.map((obj, idx) => {
            console.log(obj);
            return (
              <div className="card">
                <button onClick={() => deletCard(obj.publicId)}> ❌</button>
                <span>{obj.size}</span>
                <span>{obj.name}</span>
                <iframe key={idx} src={obj.secureUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }; */
}
