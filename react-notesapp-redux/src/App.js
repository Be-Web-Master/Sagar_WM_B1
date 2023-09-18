import React, { useState, useEffect } from "react";
import "./App.css";
import { FormContainer } from "./formContainer";
import { NotesContainer } from "./notesContainer";
import { ReduxDemo } from "./demoRedux/reduxDemo";
function App() {
  return (
    <div className="App">
      <ReduxDemo/>
      {/* <FormContainer />
      <hr />
      <NotesContainer /> */}
    </div>
  );
}

export default App;
