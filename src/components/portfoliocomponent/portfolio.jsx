import React from 'react'
import '../portfoliocomponent/portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// do not use the images in production

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Crypto Currency Dashboard & financial Visualization',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/16673715-Crypto-Currency-Dashboard-andfinancial-data-Visualization'
},

{
  id: 2,
  image: IMG2,
  title: 'charts templates & infographics in figma',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/166580766-origin-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id: 3,
  image: IMG3,
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
 {
  id: 4,
  image: IMG4,
  title: 'Maintaining tasks and tracking progress',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id: 5,
  image: IMG5,
  title: 'Charts templete and infographics in Figma',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/16541289-origin-UI-kit-charts-templates-infographics-in-Figma'
},

{
  id: 6,
  image: IMG6,
  title: 'Charts templete and infographics in Figma',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/16541289-origin-UI-kit-charts-templates-infographics-in-Figma'
},
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
           <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href= {github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
          )
        })
      }
         </div>
    </section>
  )
}

export default portfolio