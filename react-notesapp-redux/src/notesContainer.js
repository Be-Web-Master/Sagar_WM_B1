import { TextComponent } from "./textComponent";
export const NotesContainer = (props) => {
  // const { data, title, description, setDescription, setTitle, setData } = props;

  // const deleteItem = (idx) => {
  //   const updateData = data.filter((_, id) => idx !== id);
  //   setData(updateData);
  //   localStorage.setItem("todoData", JSON.stringify(updateData));
  // };
  // const updateItem = (todo, idx) => {
  //   setDescription(todo.description);
  //   setTitle(todo.title);
  //   setData((arr) => {
  //     return arr.filter((_, id) => idx !== id);
  //   });
  // };
  return (
    <div className="cards">

          <div className="card">
            <span >➕</span>
            <span >❌ </span>
           <TextComponent h1={"title..."}/>
           <TextComponent p={"description...."}/>

          </div>

    </div>
  );
};
