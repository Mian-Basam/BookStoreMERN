import Courses from "./Courses/Courses";
import Home from "./Home/Home";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

import {Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <>
    
      <div className="dark:bg-slate-900 dark:text-white">
         <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path= "/course" element= {<Courses />}/>
          <Route path= "/signUp" element= {<SignUp />}/>
          <Route path= "/contact" element= {<Contact />}/>

        </Routes>
        </div>
      
    </>
  );
}
