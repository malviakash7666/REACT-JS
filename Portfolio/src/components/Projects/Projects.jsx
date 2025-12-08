import React from 'react'
import {project} from "../../assets/project"
import Card from '../Card/Card'
import "./Projects.css"
// import ca from '../../assets/ca.png'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
// import tti from '../../assets/tti.png'
// import br from '../../assets/br.png'
// import ise from '../../assets/ise.png'
const Projects = () => {
    console.log(project)
  return (
    <div id='projects'>
        <h1 id='para'>1 Years + expercence in building a react js and mern stack projects</h1>
        <div className='slidebar'>
<Card title="VIRTUAL ASSISTANT" image={va} />
<Card title="AI POWERD FITNESS WEBSITE" image={fw}  />
<Card title="AI CHATBOT" image={cb} />
<Card title="AI TEXT TO IMAGE" image={cb} />


        </div>
      
    </div>
  )
}

export default Projects
