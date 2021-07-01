import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
const Navbar = () => {
    return (
        <header className="bg-red-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white " className="inline-flex items-center mr-4 text-red-100 py-6 px-3 hover:text-green-800 text-4xl font-bold cursive tracking-widest"> 
                     Haroon
                    </NavLink>
                    <NavLink activeClassName="text-red-100 bg-red-700" className="inline-flex items-center my-6 text-red-200 py-3 px-3 rounded hover:text-green-800" to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink activeClassName="text-red-100 bg-red-700" className="inline-flex items-center my-6 text-red-200 py-3 px-3 rounded hover:text-green-800" to="/project">
                        Projects
                    </NavLink>
                    <NavLink activeClassName="text-red-100 bg-red-700" className="inline-flex items-center my-6 text-red-200 py-3 px-3 rounded hover:text-green-800" to="/about">
                        About Me!
                    </NavLink> 
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                 <SocialIcon url="https://github.com/Haroon-jay" className="mr-4" target="_blank" fgColor="white" style={{height:35,width:35}}/>
                 <SocialIcon url="https://www.linkedin.com/in/haroon-jawad-7942151ba/" className="mr-4" target="_blank" fgColor="white" style={{height:35,width:35}}/>
                 
                </div>
            </div>
        </header>
    )
}

export default Navbar
