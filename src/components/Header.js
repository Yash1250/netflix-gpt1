import React from 'react'
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <div className='absolute'>
      <img className='h-20 w-44 mx-24 my-2' src={Logo} alt='logo'/>
    </div>
  )
}

export default Header
