import { notesContext } from "./App.js";
import { TextComponent } from "./textComponent";
export const InputElement = (props) => {
  const { value } = props;

  return <div>{value.typ == "input" ? <TitleInput /> : <DescTextArea />}</div>;
};
const TitleInput = () => {
  return (
    <>
      <TextComponent id={"title"} label={"title"} />

      <input id="title" type="text" />
    </>
  );
};

const DescTextArea = () => {
  return (
    <>
      <TextComponent label={"Description"} />
      <textarea   ></textarea>
    </>
  );
};
