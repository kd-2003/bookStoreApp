import React from 'react'
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Courses from './courses/Courses'
import CourseDetails from './components/CourseDetails'
import DsaPython from './components/DsaPython'
import WebDevelopment from './components/WebDevelopment'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log("Auth User in Navbar:", authUser);
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
          <Route path='/courses' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
          <Route path='/courses/dsa-python' element={authUser?<DsaPython/>:<Navigate to="/signup"/>}/>
          <Route path='/courses/web-development' element={authUser?<WebDevelopment/>:<Navigate to="/signup"/>}/>
          <Route path='/courses/:sectionId' element={authUser?<CourseDetails/>:<Navigate to="/signup"/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App

