import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
      <div>Hello <br /> Abhay </div>
      <button className='bg-red-500 text-white px-5 py-2 rounded'>Log out</button>
    </div>
    
  )
}

export default Header