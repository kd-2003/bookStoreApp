import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // Open the signup modal when component mounts
    setTimeout(() => {
      const modal = document.getElementById('my_modal_4');
      if (modal && modal.showModal) {
        modal.showModal();
      }
    }, 100);
  }, []);

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        const userInfo = {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        }
        const res = await axios.post("https://bookstoreapp-5x3j.onrender.com/user/signup", userInfo);
        if (res.data) {
          toast.success('Signup Successfully');
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          const modal = document.getElementById('my_modal_4');
          if (modal && modal.close) {
            modal.close();
          }
          navigate(from, { replace: true });
        }
      } catch (err) {
        console.log(err);
        const errorMessage = err.response?.data?.message || 'Signup failed. Please try again.';
        toast.error(errorMessage);
      }
    };


  return (
    <>
    <div className="flex h-screen items-center justify-center dark:bg-gray-900 dark:text-white bg-white">
        <dialog id='my_modal_4' className="modal">
          <div className="modal-box dark:bg-gray-800 dark:text-white w-96">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button 
                type="button"
                onClick={() => {
                  const modal = document.getElementById('my_modal_4');
                  if (modal && modal.close) modal.close();
                }}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            
            <h3 className="font-bold text-lg mb-4">Signup</h3>
            <div className="mt-4 space-y-3">
              <label className="block text-sm font-semibold">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <span className="text-red-500 text-sm">Full name is required</span>}
            </div>

            <div className="mt-4 space-y-3">
              <label className="block text-sm font-semibold">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            <div className="mt-4 space-y-3">
              <label className="block text-sm font-semibold">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <button 
                type="submit" 
                className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 cursor-pointer font-semibold transition-all"
              >
                Signup
              </button>
              <p className="text-center text-sm">
                Have Account?{" "} 
                <button  
                  type="button"
                  className="underline text-blue-500 hover:text-blue-700 cursor-pointer font-semibold" 
                  onClick={() => {
                    const modal = document.getElementById('my_modal_4');
                    if (modal && modal.close) modal.close();
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </button>
              </p>
            </div>
            </form>
          </div>
        </dialog>
        
        <Login/>
    </div>
    </>
  );
}

export default Signup
