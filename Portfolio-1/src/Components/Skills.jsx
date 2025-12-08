import React from 'react'
import {motion as Motion} from "framer-motion"
import {skill} from '../assets/assets'


const Skills = () => {
  return (
    <Motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false,amount:0.2 }}
      id="skills"
      className='py-20 bg-dark-200'
    >
        <div className="container mx-auto px-6">
            <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple'>Skills</span></h2>
            
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Technologies I work with bring ideas to life  </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {
                skill.map((item,index)=>(
                  <div key={index} className='bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer'>
                    <div className="flex items-center mb-4">
                      <item.icon className="w-12 h-12 text-purple mr-6" />
                      <h3 className='text-xl font-semibold'>{item.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{item.description}

                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tech)=>(
                        <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tech}</span>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
        </div>



    </Motion.div>
  )
}

export default Skills