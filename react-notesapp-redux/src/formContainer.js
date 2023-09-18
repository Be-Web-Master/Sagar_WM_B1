import React, { useEffect } from "react";
import { InputElement } from "./inputElement";
import { Button } from "./buttonComponent";

export const FormContainer = (props) => {
  // const { data, title, description, setDescription, setTitle,setData  } = props;
  // console.log(props);

  // useEffect(() => {
  //   const getTodoData = JSON.parse(localStorage.getItem("todoData")) ?? [];
  //   setData(getTodoData);
  // }, []);

  return (
    <div className="form">
      <h1>Notes-App</h1>
      <form >
        <InputElement value={{ typ: "input" }} />
        <InputElement value={{ typ: "textArea" }} />
        <Button btnText={"Create"} />
      </form>
    </div>
  );
};
