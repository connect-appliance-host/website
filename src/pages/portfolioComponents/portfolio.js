import React, { useContext } from "react";

// components
import PageBanner from "../../components/pageBanner";
import { ScreenContext } from "../../providers/screenProvider";
import ProjectGallery from "./projectGallery"
import portfolioContent from "../../assets/content/portfolioContent";


function Portfolio() {

  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      <PageBanner title={"Our Projects"} description={"See some of the work we've done."} isSmallScreen={isSmallScreen}/>
      <div>
        {portfolioContent.map((project, index) => {
          return (<ProjectGallery projectInfo={project} key={index}/>);
        })}
        
      </div>
    </>
  );
}
  
export default Portfolio;


// inspiration: https://dribbble.com/shots/2657854-Project-Gallery/attachments/600711?mode=media