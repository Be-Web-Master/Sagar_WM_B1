// import React, { useState, useRef } from "react";
// import "./Carousal.css";
// const Carousal = ({ imagelList = [], onDelete }) => {
//   const [page, setPage] = useState(0);
//   const carouserRef = useRef();

//   const isImageList = imagelList > 0;
//   const scrollToRight = () => {
//     const nextPage = page + 1;
//     if (imagelList.length > nextPage) {
//       carouserRef.current.children[nextPage].scrollIntoView({
//         behavior: "smooth",
//       });
//       setPage(nextPage);
//     }
//     // console.log("right");
//   };
//   const scrollToLeft = () => {
//     const prevPage = page - 1;
//     if (prevPage >= 0) {
//       carouserRef.current.children[prevPage].scrollIntoView({
//         behavior: "smooth",
//       });
//       setPage(prevPage);
//     }
//     // console.log("left");
//   };
//   const deleteFileByOne = () => {
//     onDelete(imagelList.filter((img, index) => index !== page));
//     setPage(0);
//   };
//   return (
//     <>
//       <div className="carousal-uppar-container">
//         {
//           <>
//             <div ref={carouserRef} className="carousal-lower-container">
//               {imagelList.length > 0 ? (
//                 imagelList.map((image, index) => (
//                   <img src={image} alt="" key={index} />
//                 ))
//               ) : (
//                 <img src={defaultImage} alt="No image" />
//               )}
//             </div>
//             {imagelList.length > 0 && (
//               <>
//                 {page > 0 && (
//                 <div
//                   onClick={scrollToLeft}
//                   className="carousal-left-arrow carousal-arrow"
//                 >
//                   {" "}
//                   ⬅️{" "}
//                 </div>        )
//             )}
//           </>
//         }

//         <div
//           onClick={scrollToRight}
//           className="carousal-right-arrow carousal-arrow"
//         >
//           {" "}89
//           ➡️{" "}
//         </div>
//         <button onClick={deleteFileByOne} className="img-delet">
//           ❌
//         </button>
//         <button className="save-btn">Save</button>
//       </div>
//     </>
//   );
// };

// export default Carousal;
