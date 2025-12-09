import React from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  }, [])
  return (
    <>
    <div className="max-w-screen-2xl dark:bg-white dark:text-black container mx-auto md:px-20 px-4">
      <div className="items-center text-center justify-center dark:bg-white dark:text-black ">
        <h1 className="text-2xl md:text-4xl font-bold">
          We're Delighted to have You {" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed repellat nisi doloremque exercitationem vero libero quas, corrupti expedita soluta velit eos, quasi incidunt ratione modi dignissimos omnis ullam perferendis?
        </p>
        <Link to="/">
           <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">Back</button>
        </Link>
        
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mt-16 mb-16">
        {
          book.map((item)=>(
             <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
