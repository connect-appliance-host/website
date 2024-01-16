import React, { useContext } from "react";
import { ScreenContext } from "../providers/screenProvider";


function PageBanner ({title, description}) {
  const {isSmallScreen} = useContext(ScreenContext);

  const heightAndPadding = isSmallScreen ? ' h-[250px] ' : ' h-[420px] ';
  const fontSizeTitle = isSmallScreen ? ' text-4xl' : ' text-6xl ';
  const fontSizeDesc = isSmallScreen ? ' text-xl ' : ' text-2xl ';

  return (
    <>
      <div className={"bg-highlight px-12 flex flex-col justify-end pb-10 text-highlightText " + heightAndPadding}>
        <div className={fontSizeTitle + " uppercase"}>
          {title}
        </div>
        <div className={fontSizeDesc}>
          {description}
        </div>
      </div>
    </>
  );
}

export default PageBanner;