import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import portfolioContent from "../../assets/content/portfolioContent";


function PortImage({picture, shortDesc, isSmallScreen}){
  const photoDimensions = isSmallScreen ? " w-full h-[400px] " : " w-[300px] h-[200px] ";
  const photoStyle = `object-cover ${photoDimensions} `;

  return (
    <>
      <div className="relative group mt-5">
        <img src={picture} alt="portfolio pic" className={photoStyle}/>
        <div className="hover:bg-drawerClearBg h-full w-full absolute top-0 left-0 overflow-hidden duration-100">
          <div className="group-hover:bottom-10 absolute -bottom-5 left-10 duration-150">
            {shortDesc}
          </div>
        </div>
      </div>
    </>
  );
}


function HomePort({isSmallScreen}) {
  // styles
  const galleryFlex = isSmallScreen ? " flex flex-col px-10 " : "flex flex-wrap justify-center px-2 space-x-4";

  return (
    <>
      <div className="flex flex-col items-center py-8 bg-tertiaryBg text-white">
        <div className="text-3xl ">
          Our Work
        </div>
        <div>
          A few examples of what we can do.
        </div>

        {/* pictures */}
        <div className="w-full ">
          <div className={galleryFlex + " w-full "}>
              {/* create a picture for each in the list */}
              {portfolioContent.map((project, index) => {
                return(<PortImage picture={project.imageList[project.previewPic-1]} shortDesc={project.shortDesc} isSmallScreen={isSmallScreen} key={index}/>)
              })}
          </div>
        </div>

        {/* bottom message */}
        <div className="pt-8 px-5 flex text-center">
          <div className="text-xl text-white">
            Explore our work further in the <Link to="/portfolio"><span className="hover:bg-highlight pb-1">
                portfolio
                <FaArrowRight className="text-tertiaryText inline mx-2"/>
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}


export default HomePort;