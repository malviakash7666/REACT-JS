import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const navigateTo = useNavigate()

  const handleNavigae =(id)=>{
    navigateTo(`/`)
    setTimeout(()=>{
      const el = document.getElementById(id);
      el.scrollIntoView({behavior:'smooth'})
    },190)
  }
  
  return (
    <nav className=' z-40 fixed w-full bg-dark-100/90 backdrop-blur-sm  py-4 px-8 shadow-lg'>
      <div className="container mx-auto flex justify-between items-center">
        <Link onClick={()=>handleNavigae("home")} className='text-3xl font-bold text-white'>
        Akash <span className='text-purple'>
          Malvi
        </span>
        <div className="w-4 h-4 bg-purple rounded-full"></div>
        </Link>
    
      <div className="hidden md:flex space-x-10">
        <Link  className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("home")}>Home</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("about")}>About</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("skills")}>Skills</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("project")}>Projects</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("experience")}>Experience</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("contact")}>Contact</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
       {/* mobile button  */}
       <div className="md:hidden">
        {
          !show ? <FaBars className='text-2xl cursor-pointer' onClick={()=>setShow(!show)}/> :    <FaXmark className='text-2xl cursor-pointer' onClick={()=>setShow(!show)} />
        }
        
     
       </div>
  </div>
  {/* mobile menu  */}
  {
    show &&  (
       
    
      <div className="md:hidden mt-4 w-full bg-dark-300 h-screen rounded-lg   flex flex-col justify-center space-y-2 text-center items-center">
        <Link  onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("home")}>Home</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("about")}>About</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("skills")}>Skills</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("project")}>Projects</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link  onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("experience")}>Experience</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link onClick={()=>setShow(!show)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
        <span onClick={()=>handleNavigae("contact")}>Contact</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-purple  transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

   

    )
  }
    </nav>
  )
}

export default Navbar