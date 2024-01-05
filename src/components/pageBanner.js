import React, { useContext } from "react";
import { ScreenContext } from "../providers/screenProvider";


function PageBanner ({title, description}) {
  const {isSmallScreen} = useContext(ScreenContext);

  const heightAndPadding = isSmallScreen ? ' h-[300px] ' : ' h-[420px] ';
  return (
    <>
      <div className={"bg-highlight px-12 flex flex-col justify-end pb-10 text-highlightText " + heightAndPadding}>
        <div className="text-6xl">
          {title}
        </div>
        <div className="text-2xl">
          {description}
        </div>
      </div>
    </>
  );
}

export default PageBanner;