import { log } from 'console';
import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologyUsed: string[];
  livelink: string;
  githublink: string;
};

const Card = ({project}:any) => {
  const { image, title, description, technologyUsed,livelink,githublink }:Project = project; 

  

  return (
    <div className="max-w-6xl rounded-3xl overflow-hidden shadow-lg bg-white">

      <div className="flex justify-evenly">
      <img className="w-3/4 h-3/4 object-cover" src={image} alt={title} />

      <div className="mt-4 mx-3 ">
          <span className="font-bold text-gray-800">Technologies:</span>
          <div className="flex flex-wrap mt-2 max-w-64"> {/* Flex container for technologies */}
            {technologyUsed.map((tech, index) => (
              <div
                key={index} // Key should be on the parent element of the mapped item
                className="bg-gray-200 text-gray-800 rounded-md px-3 py-1 text-center mr-2 mb-2" // Styled technology badge
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
     
      
      <div className="px-6 py-4">
        {/* Title */}
        <div className="font-bold text-xl mb-2">{title}</div>

        {/* Description */}
        <p className="text-gray-700 text-base mb-4">
          {description}
        </p>

       <div className="my-4 mt-10">
        <p>LIVE LINK <a
        target='_blank'
        href={livelink}
         className='mx-5 text-blue-500'>{livelink}</a></p>

        <p>GITHUB LINK <a
        target='_blank'
        href={githublink}
         className='mx-5 text-blue-500'>{githublink}</a></p>

       </div>
       
      </div>
    </div>
  );
};

export default Card;
