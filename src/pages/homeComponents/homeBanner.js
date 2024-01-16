import React, { useContext, useMemo } from "react";
import {ScreenContext} from '../../providers/screenProvider';
import homePic from "../../assets/pictures/portfolio/project_3/pic_2.jpg"
import "./animateWords.css";


function HomeBanner () {
  const {isSmallScreen, isMedScreen} = useContext(ScreenContext);

  const brands = useMemo(() => ["premium", "La Courne", "Subzero", "Gaggenau", "Officine Gullo", ], []);

  const fontSize = isSmallScreen ? ' text-2xl ' : ' text-4xl ' ;

  const picWidth = isMedScreen ? ' w-full ' : ' w-1/2 ';
  const fillerWidth = isMedScreen ? ' w-0 ' : 'w-1/2';
  const rollerColor = isMedScreen ? ' text-lightBgDark ' : ' text-highlight ';

  return(
    <>
      <div className={"bg-tertiaryBg h-[90vh] w-full flex relative"}>
        <div className={fillerWidth + " h-full flex flex-col justify-center "}></div>
        <img src={homePic} alt="stove" className={picWidth + " h-full object-cover"}/>

        {/* hero text with rolling brands */}
        <div className={picWidth + "absolute inset-y-0 left-0 px-5"}>
          <div className="h-full w-full max-w-[550px] m-auto text-white text-4xl flex flex-col justify-center">
            <div className={fontSize}>
              One stop for in-home,
            </div>
            <div className="h-10 relative overflow-hidden duration-100 ">
              <div className={rollerColor + "w-full absolute left-1/2 -translate-x-1/2 text-center uppercase font-bold"} id="word_container">
                {brands.map((brand) => {
                  return <div className={''}>{brand}</div>
                })}
              </div>
            </div>
            <div className={fontSize + "text-right"}>
              appliance services.
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default HomeBanner;