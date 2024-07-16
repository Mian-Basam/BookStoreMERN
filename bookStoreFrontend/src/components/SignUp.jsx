import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useForm } from 'react-hook-form';



function SignUp() {
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
  return (
    <>
        <div>
        <div id="my_modal_3" className="flex  h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
          <div className=" modal-box  dark:bg-slate-900 dark:text-white border-[2px] p-5  shadow-md rounded-md ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/" }className="btn btn-sm btn-circle btn-ghost dark:bg-slate-900 dark:text-white absolute right-2 top-2">✕</Link>
            {/*</form>*/}
            <h3 className="font-bold text-lg">SignUp!</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email' className='grow w-80 px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
              {...register('email', { required: true })}
              />
                <br />
                <br />
            
                {errors.email && <span className='text-sm text-red-500 border-2 border-red-500 rounded border-solid p-2  bg-red-100'>Email is required</span>}
                
            </div>
            <div className='mt-4 space-y-2'>
              <span>Username</span>
              <br />
              <input type="text" placeholder='Enter your username' className='grow w-80 px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white' 
              {...register('username', { required: true })}
              />
             <br />
             <br />
             {errors.username && <span className='text-sm text-red-500 border-2 border-red-500 rounded border-solid p-2 bg-red-100'>Username is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter your password' className='grow w-80 px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
              {...register('password', { required: true })}
              />
              <br />
              <br />
             {errors.password && <span className='text-sm text-red-500 border-2 border-red-500 rounded border-solid p-2 bg-red-100'>Password is required</span>}
            </div>
            <div className='flex mt-4 justify-around'>
            <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink700 duration-300">SignUp</button>
            <span className='text-lg'> Have account? {" "}
                <Link to="/" className='text-blue-500 underline'>Login</Link>
                </span>{" "}
            </div>
            </form>
          </div>
      
        </div>
        
        </div>
    </>
  )
}

export default SignUp