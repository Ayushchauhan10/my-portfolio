import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ProjectContainer from './ProjectContainer';

import portfoliolightPic from '../assets/portfolioLightPic.png'
import portfoliodarkPic from '../assets/portfolioDarkPic.png'
import penPalacePic from '../assets/penPalacePic.png'
import weatherAppPic from '../assets/weatherAppPic.png'
import iphoneUIPic from '../assets/iphoneUIPic.png'
import metroRoutePic from '../assets/metroRoutePic.png'
import pricingPanelPic from '../assets/pricingPanelPic.png'
import marioPic from '../assets/marioPic.png'
import urlPic from '../assets/urlPic.png'
import budegtPlannerPic from '../assets/budegtPlannerPic.png'
import appleLandingPic from '../assets/appleLandingPic.png'
import ImageCarousel from './ImageCarousel';



const projects = [
  {
    title: 'Pen Palace: Blogging MERN App',
    tech: 'React.js Node.js, Express.js, MongoDB with Mongoose, Tailwind CSS and Cloudinary',
    description: ['Developed a Full Stack MERN application having CRUD functionalities for blogs, likes,comments and dashboard',
                   'Session Persistence(24hrs) and Secure authentication system to manage user access',
                   'User-friendly interfaces ensuring a visually appealing and responsive design'
    ],
    image: [penPalacePic],
    github: 'https://github.com/Ayushchauhan10/pen-palace-frontend',
    live: 'https://penpalace.onrender.com/',
  },
  {
    title: 'Delhi Metro Route Finder',
    tech: 'Node.js, Express',
    description: ['Implemented Dijkstra Algorithm and Tries Data Structure facilitating efficient pathfinding considering both time and interchange penalties',
                  'Incorporated predictive station name recommendations for enhanced user experience',
                  'User Friendly UI, Predicts total travel time and number of stations'
    ],
    image: [metroRoutePic],
    github: 'https://github.com/Ayushchauhan10/metroRouteFrontend',
    live: 'https://metroroutefinder.onrender.com/',
  },
  {
    title: 'iPhoneUI (WebApp)',
    tech: 'React.js ,Tailwind Css',
    description: ['Designed and implemented iPhone UI with a range of working apps, like Camera App,Calculator and more'
    ],
    image: [iphoneUIPic],
    github: 'https://github.com/Ayushchauhan10/iPhoneUI',
    live: 'https://iphone-m0mq.onrender.com/',
  },
  {
    title: 'MyPortFolio ',
    tech: 'React.js ,Tailwind Css',
    description: ['Designed and implemented iPhone UI with a range of working apps, like Camera App,Calculator and more'
    ],
    image: [portfoliodarkPic,portfoliolightPic],
    github: 'https://github.com/Ayushchauhan10/metroRouteFrontend',
    live: 'https://metroroutefinder.onrender.com/',
  },
  {
    title: 'WeatherApp  ',
    tech: 'React.js, Tailwind CSS, OpenWeatherApi, and RapidApi',
    description: ['Developed a weather application providing daily weather updates and a week-long forecast based on the latitude and longitude of a given city'
    ],
    image: [weatherAppPic],
    github: 'https://github.com/Ayushchauhan10/weatherReactApp/',
    live: 'https://weather-report-8x6l.onrender.com/',
  },
  {
    title: 'Expense Tracker  ',
    tech: 'React.js,HTML,CSS',
    description: ['Simple Expense Tracker Application'
    ],
    image: [budegtPlannerPic],
    github: 'https://github.com/Ayushchauhan10/ExpenseTracker/',
    live: 'https://expensetracker-skox.onrender.com/',
  },
  {
    title: 'Apple Landing Page ',
    tech: 'HTML, CSS',
    description: ['Created a Apple Landing Page HTML,CSS only. Simple and great design.'
    ],
    image: [appleLandingPic],
    github: 'https://github.com/Ayushchauhan10/webProject',
    live: 'https://ayushchauhan10.github.io/webProject/',
  },
  {
    title: 'Url Shortener Chrome Extension',
    tech: 'Node.js , Express, MongoDB, Nanoid',
    description: ['Created a Url Shortener Chrome Extension, which shortens the https:// urls into small text links'
    ],
    image: [urlPic],
    github: 'https://github.com/Ayushchauhan10/url-shortner',
    live: '',
  },
  {
    title: 'Mario Animation ',
    tech: 'HTML, CSS',
    description: ['Created a  UI mario animation with HTML,CSS only. Simple and great design.'
    ],
    image: [marioPic],
    github: 'https://github.com/Ayushchauhan10/marioAnimation',
    live: 'https://marioanimation.onrender.com/',
  },
  {
    title: 'Pricing Panel ',
    tech: 'HTML, CSS',
    description: ['Created a pricing panel card UI with HTML,CSS only. Simple and great design. Code easy to understand.'
    ],
    image: [pricingPanelPic],
    github: 'https://github.com/Ayushchauhan10/Pricing-Panel-Card',
    live: 'https://ayushchauhan10.github.io/Pricing-Panel-Card/',
  },

  // Add more projects as needed
];




const Skills = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`flex flex-col  px-4   items-center justify-center gap-6`}>
      
      <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-6 lg:mt-10 font-black my-5`}> My 
       <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Projects</span>
      </h1>

      <div className='text-lg text-center font-medium w-[100%]'>

        Here are some of my projects, I completed using different technologies.
      </div>

      <div className={`items-center grid grid-cols-1 mb-10 lg:grid-cols-2 gap-6`}>
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
      </div>

      <h1 className={`flex flex-row items-center justify-center text-[40px] gap-2 mt-6 lg:mt-10 font-black lg:mt-2`}> My 
       <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Arts</span>
      </h1>

      <div className='text-lg text-center font-medium w-[100%] my-2'>
          Here are some of my Arts, I made as my hobby.
      </div> 
     <div>

        <ImageCarousel />
     </div>

      </div>
  )
};

export default Skills