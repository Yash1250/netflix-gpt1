import React from 'react'
import BgImage from '../images/bg.jpg';
import Header from './Header';

const Login = () => {
  return (
    <div className='relative'>
      <Header/>
      <img src={BgImage} alt='BackgroundImage'/>
    </div>
  )
}

export default Login
