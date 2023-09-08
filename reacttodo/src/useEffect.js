import { useEffect, useState } from "react";

export const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  console.log({before:count});
  useEffect(() => {
    console.log("Called from effect");
  },[]);
  console.log({after:count});
  return <>
  <span onClick={()=>setCount(count-1)}>➖</span>
  {count}
  <span onClick={()=>setCount(count+1)}>➕</span>

  </>;
};
