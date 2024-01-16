import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";

import mapImage from "../../assets/servicearea.jpg";
import { ScreenContext } from "../../providers/screenProvider";

const text = "Located in Rockwood, ON, our operational hub serves as a springboard for our widespread reach across Ontario. From bustling city centers to serene rural landscapes, our footprint spans the entirety of Ontario, with our services reaching far and wide, completing diverse jobs across this expansive province.";


function HomeServiceArea(){
  const {isMedScreen, isMegaScreen} = useContext(ScreenContext);

  const width = isMegaScreen? 900 : 700;
  
  // container
  let containerDimensions = isMegaScreen? ` w-[900px] h-[450px] ` : ` w-[700px] h-[350px] `;
  if(isMedScreen){
    containerDimensions = " flex-col w-full";
  }

  // word section
  const titleSize = isMegaScreen ? " text-4xl " : " text-2xl ";
  const descSize = isMegaScreen ? " " : " text-sm ";
  const textPadding = isMegaScreen ? " px-16 " : " px-8 ";
  const textSectionMargin = isMedScreen ? " mb-5 m-auto " : "  ";

  // map
  const imageStyles = isMedScreen ? " m-auto " : "  ";

  return (
    <>
      <div className={containerDimensions + " flex m-auto mb-32 "}>
        <div className={` ${textPadding} py-5 w-[${width/2}px] ${textSectionMargin} bg-compBg flex flex-col justify-around text-white`}>
          <div className={titleSize + " font-bold"}>
            Service Area
          </div>
          <div className={descSize + " "}>
            {text}
          </div>
          {/* contact button */}
          <div className="text-right">
            <Link className="p-4 bg-highlight w-32 text-highlightText" to="/contact"> 
              Contact us <CiMail className="inline-block"/>
            </Link>
          </div>
        </div>

        <img src={mapImage} alt="map" className={` ${imageStyles} w-[${width/2}px] h-[${width/2}px] `} />
      </div>
    </>
  );
}






export default HomeServiceArea;