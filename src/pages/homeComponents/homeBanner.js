import React, { useMemo } from "react";

import homePic from "../../assets/pictures/portfolio/project_3/pic_2.jpg"
import "./animateWords.css";


function HomeBanner ({isSmallScreen}) {
  const brands = useMemo(() => ["premium", "La Courne", "Subzero", "Gaggenau", "Officine Gullo", ], []);

  const brandStyle = "  ";

  return(
    <>
      <div className={"bg-tertiaryBg h-[90vh] w-full flex "}>

        {/* make 'premium' word cycling between all the different brands they serve */}

        <div className="w-1/2 h-full flex flex-col justify-center px-10 ">
          <div className="text-white w-full max-w-[650px] m-auto text-4xl">
            <div className="">
              One stop for in-home,
            </div>
            {/* rolling word */}
            <div className="h-10 relative overflow-hidden duration-100 ">
              <div className=" absolute left-1/2 -translate-x-1/2 text-center uppercase text-highlight font-bold" id="word_container">
                {brands.map((brand) => {
                  return <div className={brandStyle}>{brand}</div>
                })}
              </div>
            </div>

            <div className="text-right">
              appliance services.
            </div>
          </div>

        </div>
        <img src={homePic} alt="stove" className="h-full w-1/2 object-cover"/>
        
      </div>
    </>
  )
}

export default HomeBanner;


// {/* floating textbox */}
// <div className="absolute h-20 w-[300px] bottom-10 left-10 bg-lightBg px-3 flex flex-col justify-center opacity-100">
// <div className="text-lg">
//   Installing Peace of Mind.
// </div>

// {/* floating portfolio button */}
// <Link to="/portfolio"
//     className="absolute bottom-0 right-5 translate-y-2/3 
//     bg-highlight py-1 px-2 flex items-center hover:cursor-pointer 
//     hover:bg-highlightHover">
//   <div className="mr-2 text-highlightText">
//     View Portfolio
//   </div>
//   <FaArrowRight className="text-highlightText"/>
// </Link>
// </div>