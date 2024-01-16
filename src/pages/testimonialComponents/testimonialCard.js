import React from "react";


function TestimonialCard({brand, index}){


  return(
    <>
      <div className=" shadow-xl border-t-highlight border-t-4 rounded h-36 w-56 overflow-hidden flex justify-center items-center p-5">
        <img src={brand} alt="not" className=" "/>
      </div>
    </>
  );
}




export default TestimonialCard;