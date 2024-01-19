import React from 'react'

function Header() {
  return (
    <div className='flex py-1' >
      <img src="https://formease.app/images/logo.png" alt="FormEase" className=' w-[10.33%] h-[12%] sp'/>
 <ul className='flex'>
    <li className='sp'>Home</li>
    <li className='sp'>Exam</li>
    <li className='sp'>FAQ</li>
    <li className='sp'>About Us</li>
    <li className='sp'>Contact Us</li>
 </ul>
 <input type="text" className='h-6 rounded-2xl  p-4 w-72 border border-[#246BFD] sp' placeholder="Search Exam Here"/>
    </div>
  )
}

export default Header       