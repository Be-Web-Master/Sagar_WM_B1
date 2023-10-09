import React from 'react'
import ApiData from './apiData'
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Task2  from "./reactTask2";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavLink to='/reactTask2'>task 2</NavLink>
      <NavLink to='/apiData'>ApiData</NavLink>

      <Routes>
        <Route path='/reactTask2' element={<Task2/>}/>
        <Route path='/apiData' element={<ApiData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App