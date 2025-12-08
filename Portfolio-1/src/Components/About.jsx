import React from "react";
import { motion as Motion} from "framer-motion";
import { aboutInfo} from "../assets/assets"
import logo from "../assets/logo.png"
const About = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading  */}
        <h2
          className="text-3xl font-bold  text-center mb-4
             "
        >
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center  max-w-2xl mx-auto mb-16">
          Get know more about my background and passion
        </p>
        {/* image + my journey  */}
        <div className="flex flex-col md:flex-row  justify-around text-center gap-12">
          

            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6">My journey into web development began after completing my BCA, when I wrote my first line of code and realized this is the field I truly want to build my career in. I started with HTML, CSS, and JavaScript, then moved deeper into React.js, creating projects that helped me apply concepts in real-world scenarios.</p>
            <p  className="text-gray-300 mb-12">Today, I am fully focused on becoming a skilled MERN stack developer. I’ve built full-stack projects like a hospital management system, a job portal, and my personal portfolio, which strengthened my backend skills, API development, and deployment experience using platforms like Render and Vercel..</p>
            {/* cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    aboutInfo.map((data,index)=>(
                        <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"> 
                        <div className="text-purple text-4xl mb-4">
                          <data.icon />
                        </div>
                        <h2 className="text-xl font-semibold mb-3">
                          {data.title}
                        </h2>
                        <p className="text-gray-400">{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
          {/* image  */}
          <Motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="h-full w-full/2 object-cover hidden sm:block transform scale-x-[-1]"
            src={logo}
            alt="profie"
          />
             <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w- w-1/2"
        >
        
        </Motion.div>
        
        </div>
        {/* text contain  */}
     
      </div>
    </Motion.div>
  );
};

export default About;
