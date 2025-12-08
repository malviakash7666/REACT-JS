import React from 'react'
import {motion as Motion} from "framer-motion"
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const Projects = () => {
  return (
    <Motion.div
   
      id='project'
      className='py-20 bg-dark-200'
    >
        <div className="container mx-auto px-6">
            <h2 className='text-3xl font-bold text-center mb-4'>My 
                <span className='text-purple'>Projects</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">A Selection of my recent work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* projects data  */}
                {
                    projects.map((project,index)=>(
                        <ProjectCard description={project.description} image={project.image} tech={project.tech} title={project.title} key={index} demo={project.demo} code={project.code} />
                    ))
                }
            </div>
<div className="text-center mt-12">
    <Link to={"/"} className='inline-flex items-center px-6 py-3
     border border-purple rounded-lg font-medium hover:bg-purple/20  transition duration-300'><span>View More Projects</span>      <FaLongArrowAltRight className='ml-2' /></Link>

</div>
        </div>

    </Motion.div>
  )
}

export default Projects