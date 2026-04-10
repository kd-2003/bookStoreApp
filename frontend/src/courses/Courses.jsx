import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
       <Navbar/>
       <div className="dark:bg-gray-900 dark:text-white pt-25">
          <Course/>
       </div>
       <Footer/>
    </>
  )
}

export default Courses
