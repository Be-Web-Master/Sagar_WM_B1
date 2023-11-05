import React from "react";
import "./App.css";
import RegistrationPage from "./Component/Registration/RegistrationPage";
import LoginPage from "./Component/Login/LoginPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Component/Home/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
