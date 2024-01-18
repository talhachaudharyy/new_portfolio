import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Amazon Clone',
      description: 'NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS',
      image: '/amazon-clone.webp',
      link: 'https://github.com/talhachaudharyy/amazon_clone',
    },
    {
      id: 2,
      title: 'Netflix Clone',
      description: 'NextJs, Github OAuth, Google OAuth, Tailwindcss, Typescript, Stripe, Mongodb, Prisma',
      image: '/netflix.png',
      link: 'https://github.com/talhachaudharyy/Netflix-clone-talha',
    },
    {
      id: 3,
      title: 'Appointment System',
      description: 'React JS, Tailwindcss, Google OAuth, Django, Django Rest APIS, MiddleWare, Stripe, SqliteDB, Admin Dashboard',
      image: '/appointment.png',
      link: 'https://github.com/talhachaudharyy/FullStack_AppointmentSystem',
    },
    {
      id: 4,
      title: 'Ecommerce Store',
      description: 'React Js, Tailwindcss, Stripe',
      image: '/stripe.png',
      link: 'https://github.com/talhachaudharyy/Ecommerce_Stripe',
    },
    {
      id: 5,
      title: 'Real Estate',
      description: 'React Js, Tailwindcss , APIS',
      image: '/realestate.png',
      link: 'https://github.com/talhachaudharyy/real_estate',
    },
    {
      id: 6,
      title: 'Car Rent',
      description: 'NextJs, Tailwindcss, APIs',
      image: '/carrent.png',
      link: 'https://github.com/talhachaudharyy/Car-Rent',
    },
    {
      id: 7,
      title: 'Nike Landing Page',
      description: 'NextJs, Tailwindcss',
      image: '/nike.png',
      link: 'https://github.com/talhachaudharyy/nike_landingpage',
    },
    
    // Add more projects as needed
  ];

  return (
    <div id='Projects' className="text-center mt-10 md:mt-20 lg:mt-28">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Projects</h2>
      <p className="text-lg mb-8 text-gray-600">Things I’ve built so far</p>

      <div className="grid  mx-10 mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="max-w-sm bg-white rounded-lg  shadow-2xl  shadow-gray-400  overflow-hidden mx-auto">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover "
            />
            <div className="text-left  p-4">
            <div className='flex flex-row justify-between mb-2'>
            <h3 className="mb-2 text-xl font-bold  text-gray-900 ">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <BsGithub size={25} style={{top: 40}} className=' text-gray-700 hover:text-gray-900 cursor-pointer'/>
              </a>

            </div>
              <p className="mb-3 text-sm font-normal text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
