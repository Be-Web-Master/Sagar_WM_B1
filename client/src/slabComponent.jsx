import { useState,useEffect } from "react";

// const intialState= [{
//         startingQuantity: '',
//         lastQuantity:'',
//         price: '',
// }]

export const SlabComponent = () => {
  const [data, setData] = useState([])
  const [last,SetLast]=useState('')

  const submitHandle = (e) => {
    e.preventDefault();
    setData((data) => [
      ...data,
      {

        startingQuantity: e.target.startingQuantity.value,
        lastQuantity: e.target.lastQuantity.value,
        price: e.target.price.value,
      },
    ]);
  };
  const deleteHandle=(i)=>{
  const deleteData = data.filter((_,idx)=>idx!==i)
  setData(deleteData)
  }
  const createList =()=>{

  }
  return (
    <>
      <div>
        <input
          type="number"
          name="startingQuantity"
          placeholder="Starting Quantity"
        />
        <input type="number" name="lastQuantity" onKeyUp={(e)=>{
          createList()
          setLast(e.target.value)}}  placeholder="Last Quantity" />
        <input type="number" name="price" />
        <button onClick={()=>editHandle()}>Edit</button>
        <button onClick={()=>deleteHandle()}>Delete</button>

      </div>
      {data.map((obj,i) => {
        return (
          <tr>
            <td >{obj.startingQuantity}</td>
            <td>{obj.lastQuantity}</td>
            <td>{obj.price}</td>
            <td><button onClick={()=>deleteHandle(i)}>Edit</button></td>
          </tr>
        );
      })}
    </>
  );
};
