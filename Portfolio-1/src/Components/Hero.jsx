import React from "react";

import  {motion as Motion}  from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Hero = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r  from-dark-100 via-dark-300 to-dark-100"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
         <div className="md:w-1/2 flex justify-center ">
        <div className="relative w-64 h-64 md:w-80 md:hh-80">
          <div>
            <Motion.img
            animate={{y:[0,-20,0]}}
            transition={{
              duration:2,
              repeat:Infinity,
              repeatType:"loop",
              ease:"easeInOut"
            }}
             src={logo} className="relative rounded-full  w-64 h-64 md:w-80 md:h-80 object-cover  animate-float" alt="" />

          </div>
        </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1
            className="text-4xl md:text-6xl font-bold  mb-4
            "
          >
            Hi, I'm <span className="text-purple">Akash Malvi</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
{ <Typewriter
   words={["React.js developer", "MERN stack developer","Frontend developer","Backend Developer"]}
   cursor="_"
   loop={true}
   
/>}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create a stunning web experience with morder technologies and inovative design
          </p>
          <div className="flex space-x-4 ">
            <Link to={"#projects"} className="px-6 py-3 bg-purple rounded-lg font-medium  hover:bg-purple-700 transition duration-300 ">View work</Link>
            <Link to={"#projects"} className="px-6 py-3 border-purple rounded-lg font-medium  hover:bg-purple/20  transition decoration-purple-300 ">Contact Me </Link>
            
          </div>
        </div>
        {/* right side  */}
       
      </div>
    </Motion.div>
  );
};

export default Hero;
