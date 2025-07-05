import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const className = "rounded-full hover:text-[#56DFCF] delay-100"
  return (
    <div className='text-white flex justify-around p-1'>
        <NavLink to={"/depoly-movie-website"} end className={className}>Home</NavLink>
        <NavLink to={"/depoly-movie-website/About"} className={className}>About Us</NavLink>
        <NavLink to={"/depoly-movie-website/Contact"} className={className}>cntact with Us</NavLink>
        <div className="searchbar flex items-center space-x-1">
          <NavLink to={"/depoly-movie-website/search"} className={`${className} rounded-full`}>
            <IoIosSearch className='text-xl' />
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar