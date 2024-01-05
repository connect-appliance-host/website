import React, { useContext } from "react";
import PageBanner from "../../components/pageBanner";
import {ScreenContext} from "../../providers/screenProvider";

import servicePageContent from "../../assets/content/servicePageContent";

function ServiceListing({service}){
  const {isSmallScreen, isMedScreen} = useContext(ScreenContext);

  const paragraphTextSize = isSmallScreen ? " text-xs " : " text-md ";
  const containerFlex = isMedScreen ? "" : " flex space-x-5 ";
  const pictureDimensions = isMedScreen ? " w-full h-[250px] object-cover " : " min-w-[300px] max-w-[300px] ";
  const titleTextSize = isSmallScreen ? " text-2xl " : " text-3xl ";
  let contentStyle = isMedScreen ? " px-5 pt-5" : "";

  if(isSmallScreen){
    contentStyle = " pt-5 ";
  }

  return (
    <>
      <div className={ containerFlex }>
        <div >
          <img src={service.picture} className={pictureDimensions + "  "} alt="service pic"/>
        </div>
        <div className={contentStyle + " flex flex-col "}>
          <div className={titleTextSize}>
            {service.title}
          </div>
          <div className={paragraphTextSize + " text-justify"}>
            {service.desc}
          </div>
        </div>
      </div>
    </>
  );
}

function Services() {
  const {isMedScreen} = useContext(ScreenContext);

  const width = isMedScreen ? " " : " max-w-[900px] m-auto ";

  return (
    <>
      <PageBanner title={"Services"} description={"Services you can trust."} />
      <div className={width + " p-10 flex flex-col space-y-10 "}>
        {servicePageContent.map((service, index) => {
          return (<ServiceListing service={service} key={index}/>)
        })}
      </div>
    </>
  );
}
  
export default Services;