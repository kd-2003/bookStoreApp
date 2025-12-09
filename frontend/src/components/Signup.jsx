import React from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      const userInfo = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      }
      await axios.post("http://localhost:8080/user/signup", userInfo)
      .then((res)=> {
        console.log(res.data)
        if(res.data){
          toast.success('Signup Successfully');
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error(err.response.data.message);
        }
      });
    };


  return (
    <>
    <div className="flex h-screen items-center justify-center dark:bg-white dark:text-black">
        <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal() }>Signup</button>
        <dialog id='my_modal_4' className="modal">
          <div className="modal-box  dark:bg-white dark:text-black ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">

              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-4">
              <span>Name</span>
              <br/>
              <input type="text" 
              placeholder="Enter your FullName" 
              className="w-80 px-3 py-1 border rounded-md outline-none "
              {...register("fullName", { required: true })}
              />
              <br/>
              {errors.fullName && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-4">
              <span>Email</span>
              <br/>
              <input type="email" 
              placeholder="Enter your email" 
              className="w-80 px-3 py-1 border rounded-md outline-none "
              {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-4 ">
              <span>Password</span>
              <br/>
              <input type="password" 
              placeholder="Enter your password" 
              className="w-80 px-3 py-1 border rounded-md outline-none "
              {...register("password", { required: true })}
              />
              <br/>
               {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer">Signup</button>
              <p>Have Account?{" "} <button  
                 className="underline text-blue-500 cursor-pointer" 
                 onClick={() => {
                  document.getElementById("my_modal_3").showModal()}}
                  >
                Login</button>
                <Login/>
                {" "}
                </p>
            </div>
            </form>
          </div>
        </dialog>
    </div>
    </>
  )
}

export default Signup
