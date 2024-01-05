import React from "react";
import HomeServiceBlocks from "./homeServiceBlocks";
import HomeBanner from "./homeBanner";
import HomePort from "./homePort";
import HomeServiceArea from "./homeServiceArea";

function Home({isSmallScreen}) {

  return (
    <div>
      <HomeBanner/>
      <HomeServiceBlocks isSmallScreen={isSmallScreen}/>
      <HomeServiceArea/>
      <HomePort isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default Home;