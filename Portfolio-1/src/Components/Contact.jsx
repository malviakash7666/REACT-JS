import React from 'react'
import { motion as Motion } from "framer-motion";
import { FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200 "
    >
        <div className=" px-6 ">
           <h2 className='text-3xl font-bold text-center mb-4'>Get In 
                <span className='text-purple'>Toach</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Have a project in mind or want to collobrate? Let's talk!</p>
            
            <div className=" justify-center gap-12 max-w-5xl mx-auto">
                <div>
                    <form  className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block  text-start text-gray-300 mb-2'>Your Name</label>
                            <input type="text" id="name" className='w-full bg-dark-300 border border-dark-400 rounded-lg  px-4 py-3 outline-none'  />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2 text-start'>Email Address</label>
                            <input type="email" id="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg  px-4 py-3 outline-none'  />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2 text-start'>Your Message</label>
                            <textarea  id="message"  className='w-full  h-40  bg-dark-300 border border-dark-400 rounded-lg  px-4 py-3 outline-none'  />
                        </div>
                        <button type="submit" className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                            Send
                        </button>
                    </form>

                </div>
                
            
            </div>

        </div>

    </Motion.div>
  )
}

export default Contact