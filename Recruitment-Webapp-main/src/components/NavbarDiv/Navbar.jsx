import React from 'react';
import './Navbar.css'
const Navbar = () => {
	return (
	  <div className="navbar flex justify-between items-center p-[3rem] bg-gradient-to-r from-blue-800 to-blue-600">
		<div className="logoDiv animate-scaleAnimation">
		  <h1 className="logo text-[25px] text-white">
			<strong>Job</strong>Portal
		  </h1>
		</div>
  
		<div className="menu flex gap-8">
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			Jobs
		  </li>
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			Companies
		  </li>
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			About
		  </li>
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			Contact
		  </li>
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			Login
		  </li>
		  <li className="menuList text-white hover:text-white transition-colors duration-300">
			Register
		  </li>
		</div>
	  </div>
	);
  };
  
  
  export default Navbar;
  
