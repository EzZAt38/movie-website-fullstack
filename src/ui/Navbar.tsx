import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-around p-1'>
        <NavLink to={"/react-product-porject"}>Home</NavLink>
        <NavLink to={"/react-product-porject/About"}>About Us</NavLink>
        <NavLink to={"/react-product-porject/Contact"}>cntact with Us</NavLink>
        <div className="searchbar flex items-center space-x-1">
          <NavLink to={"/react-product-porject/search"}>
            <IoIosSearch className='text-xl' />
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar