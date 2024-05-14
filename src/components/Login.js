import React from 'react'
import BgImage from '../images/bg.jpg';
import Header from './Header';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='relative'>
      <Header/>
      <img src={BgImage} alt='BackgroundImage'/>
    </div>
    <form className='text-white bg-black bg-opacity-70 w-[28rem] absolute flex flex-col p-16 gap-8 rounded-sm'>
      <h2 className='font-bold text-3xl'>Sign In</h2>
      <input className='h-14 bg-black bg-opacity-60 p-4 border-l-rose-1001 border-2 rounded-md' type='text' placeholder='Email or Mobile Number'/>
      <input className='h-14 bg-black bg-opacity-60 p-4 border-l-rose-1001 border-2 rounded-md' type='password' placeholder='Password'/>
      <button className='p-2 bg-red-700 font-bold rounded-md'>Sign In</button>
      <p className='text-gray-200 mx-auto'>New to Netflix? <button className='font-bold text-white'>Sign up now. </button></p>
    </form>
    </div>
  )
}

export default Login
