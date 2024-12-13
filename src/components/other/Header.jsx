import React from 'react'

const Header = ({Data}) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }


  return (
    <div className='flex justify-between items-end'>
      <div>Hello <br /> abhayuser</div>
      <button 
      onClick={logOutUser} 
      className='bg-red-500 text-white px-5 py-2 rounded'>Log out</button>
    </div>
    
  )
}

export default Header