import React from "react";
import PageBanner from "../../components/pageBanner";
import TestimonialCard from "./testimonialCard";

import brandContent from "../../assets/content/brandContent";

function Testimonials() {
  return (
    <>
      <PageBanner title={"Brands"} description={"Discover our favorite brands we work with for superior appliance solutions."}/>
      <div className=" flex max-w-[1024px] grid grid-cols-4 gap-5 ">
        {brandContent.map((brand, index) => {
          
          return(<TestimonialCard brand={brand} key={index}/>);
        })}
        
      </div>
    </>
  );
}
  
export default Testimonials;