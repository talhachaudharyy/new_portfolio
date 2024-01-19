import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-4 mb-10 bg-transparent text-gray-800">
      {/* Left side with an image */}
      <div className="flex items-center mb-4 md:mb-0">
        <Image
        width={60}
        height={60}
          src="/picofme.png"  
          alt="Logo"
          className=" mr-2 ml-10 rounded-full"
        />
      </div>
      
      <div className="flex flex-col md:flex-row lg:mr-10 items-center">
        <div className="flex flex-col lg:mr-10 md:mr-10 text-center md:flex-row md:space-x-10">
          <h4 className="mb-2 text-lg font-semibold">+92 317 3048369</h4>
          <h4 className="mb-2 text-lg font-semibold">chaudharytalhaofficial@gmail.com</h4>
        </div>

        <div className="flex items-center space-x-5 mt-4 md:mt-0">
        <a
            href="https://github.com/talhachaudharyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={30} className='mr-5 cursor-pointer hover:fill-gray-700' color='#666666' />
          </a>          
          <a
            href="https://www.linkedin.com/in/talhachaudharyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={30} className='mr-5 cursor-pointer hover:fill-gray-700' color='#666666' />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
