import React, {useContext, useEffect, useState} from "react";
import {ModalContext} from "../../providers/modalProvder";

// components
import { ScreenContext } from "../../providers/screenProvider";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

function PictureSlider({imageList}){
  const imageListLength = imageList.length;

  // states
  const {isSmallScreen, isMedScreen, isLrgSCreen, isMegaScreen} = useContext(ScreenContext);

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(-100);

  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);


  // when index changes, update moveability
  useEffect(() => {
    // right edge of images
    if(index === (imageListLength -1)){
      setCanMoveRight(false);
    }
    // left edge of images
    if(index === 0){
      setCanMoveLeft(false);
    }
  }, [index, imageListLength]);

  // index change handlers
  function decrementIndex(){
    setIndex(index - 1);
  }
  function incrementIndex(){
    setIndex(index + 1);
  }


  // moving images right and left
  function moveLeft(){
    if(canMoveLeft){
      setOffset(offset + 100);
      decrementIndex();
    }

    // if at right edge and moves left
    if(!canMoveRight){
      setCanMoveRight(true);
    }
  }

  function moveRight(){
    if(canMoveRight){
      setOffset(offset - 100);
      incrementIndex();
    }

    // if at left edge and moves right
    if(!canMoveLeft){
      setCanMoveLeft(true);
    }
  }

  


  // styles
  const sliderOffset = `${offset}%`;

  const sliderOffsetStyle = {
    left: sliderOffset
  }

  let sliderHeight = isSmallScreen ? " h-[250px] " : " h-[400px] ";
  if(isLrgSCreen){
    sliderHeight = " h-[600px] ";
  }
  if(isMegaScreen){
    sliderHeight = " h-[762px] ";
  }
  
  const pictureStyles = ` ${sliderHeight} min-w-full object-cover px-2 select-none hover:cursor-pointer`;
  const padderStyles = ` ${sliderHeight} min-w-full flex-none bg-lightBgDark px-2`;
  const sliderStyles = ` ${sliderHeight} relative h-[250px] w-full duration-100 `;

  const arrowSize = isMedScreen ? ' text-4xl ' : ' text-5xl ';
  const arrowStyles = " absolute inset-y-0 h-full hover:cursor-pointer" + arrowSize;
  const rightArrowColor = canMoveRight ? " text-highlight " : " text-black ";
  const leftArrowColor = canMoveLeft ? " text-highlight " : " text-black ";

  // functionality for setting modal children to view the image in more detail
  const {openModal} = useContext(ModalContext);

  function showImageInModal(imageSrc){
    openModal(<ImageForModal imageSrc={imageSrc}/>);
  }

  return(
    <>
      <div className=" w-full m-auto overflow-hidden">
        <div className="relative w-10/12 m-auto">
          {/* the image container that slides */}
          <div className={sliderStyles} style={sliderOffsetStyle}>
            <div className="absolute flex w-full">
              <div className={padderStyles}/>
              {/* create each image */}
              {imageList.map((image, index) => {
                return( <img className={pictureStyles} src={image} alt={"gallery"} key={index} onClick={() => showImageInModal(image)} /> );
              })}
              
              <div className={padderStyles}/>
            </div>
          </div>

          <IoMdArrowDropleftCircle className={arrowStyles + leftArrowColor + " left-0 ml-4 "} onClick={moveLeft}/>
          <IoMdArrowDroprightCircle className={arrowStyles + rightArrowColor + " right-0 mr-4 "} onClick={moveRight}/>
        </div>
      </div>
    </>
  );
}


function ImageForModal({imageSrc}){
  const pictureStyles = "h-full min-w-full object-cover px-2 select-none";

  return(
    <>
      <img className={pictureStyles} src={imageSrc} alt={"gallery"}/>
    </>
  )
}

export default PictureSlider;