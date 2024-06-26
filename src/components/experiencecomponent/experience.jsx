import React from 'react'
import '../experiencecomponent/experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
<section id='experience'>
  <h5>What Skills I have</h5>
  <h2>My Experience</h2>
  <div className='container experience__container'>
    <div className="experience__fronted">
    <h3>Fronted Development</h3>
    <div className="experience__content">
   
    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Experienced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
    <h4>Javascript</h4>
    <small className='text-light'>Experienced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill  className='experience__details-icon'/>
    <div>
    <h4>Jquery</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill  className='experience__details-icon'/>
    <div>
    <h4>React</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
    </div>
    </div>
{/*END OF FRONTED*/}
    <div className="experience__backend">
    <h3>Backend Development</h3>
    <div className="experience__content">
   
    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
    <h4>Node JS</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
    <h4>MongoDB</h4>
    <small className='text-light'>Experienced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
    <h4>Express JS</h4>
    <small className='text-light'>Experienced</small>
    </div>
    </article>
   
    </div>
    </div>
  </div>
</section> 
 )
}

export default experience;