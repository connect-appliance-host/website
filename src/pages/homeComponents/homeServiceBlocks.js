import React, { useContext } from "react";
import {ScreenContext} from "../../providers/screenProvider";
import serviceListingsInfo from "../../assets/content/homeServicesContent";
import {widthMax} from "../../utils/globals";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function ServiceListing({title, picture }){
  // const serviceListingWidth = isSmallScreen ? " w-full " : " w-[300px] ";
  const serviceListingWidth = `  `;

  return(
    <>
      {/* service listing */}
      <div className={serviceListingWidth + 
          "flex-none flex flex-col items-center px-2 pt-6 hover:scale-[1.2] ease-in-out duration-200 "}>
        
        <img src={picture} alt="icon" className=" w-16 h-16"/>

        <div className="text-xl text-center py-3">
          {title}
        </div>
      </div>
    </>
  );
}



function HomeServiceBlocks () {
  
  const {isSmallScreen, isLrgSCreen, isMegaScreen} = useContext(ScreenContext);
  
  let serviceListingContainer = !isLrgSCreen ? 
    " grid grid-cols-2 " :
    " grid grid-cols-3 ";

  if(isMegaScreen){
    serviceListingContainer = ` flex justify-around max-w-[${widthMax}px] m-auto `;
  }

  return(
    <>
      {/* framing, additions, renovations */}
      <div className="pt-10 pb-20">
        <div className="text-3xl text-center">
          Our Services
        </div>

        <div className=" w-3/4 m-auto text-center py-5">
          We specialize in providing expert in-home repair or replacement services for a wide range of premium household appliances, including refrigerators, ovens, microwaves, dishwashers, tumble dryers, washing machines, and more, ensuring efficient and reliable solutions to keep your appliances running smoothly.
        </div>


        <div className={serviceListingContainer}>
          {/* map each service listing */}
          {serviceListingsInfo.map((service, index) => {
            return(
              <>
                <ServiceListing key={index}
                  title={service.title} picture={service.picture}
                  isSmallScreen={isSmallScreen}/>
              </>
            )
          })}
        </div>

        {/* bottom message */}
        <div className="pt-10 px-5 text-center">
          <div className="text-xl text-primaryText">
            And more! See more details about our services <Link to="/services"><span className="group hover:bg-highlight hover:text-highlightText pb-1">
                here
                <FaArrowRight className="text-tertiaryBg group-hover:text-highlightText inline ml-2 mr-1"/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeServiceBlocks;