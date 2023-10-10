import React from 'react'
import Table from './Components/Table/Table'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import ExcelFilePage from './Pages/ExcelFilePage'
import Task2 from './Task2'

const App = () => {
  return (
   <BrowserRouter>
   <NavLink to="/excel-file"> Excel </NavLink>
   &nbsp;
   &nbsp;
   &nbsp;
   <NavLink to="/task2"> Task 2 </NavLink>

     <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/excel-file" element={<ExcelFilePage />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App