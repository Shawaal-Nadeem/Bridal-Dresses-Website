import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Home() {
      const fadeImages = [
         "/images/21.jpg",
         "/images/58.jpg",         
         "/images/2.jpg",
         "/images/66.jpg",
         "/images/57.jpg",
         "/images/56.jpg",
         "/images/54.jpg",
         "/images/20.jpg",
         "/images/33.jpg",
             ];
  return (
    <div>
        <div className='logo-image'>
     <img src='/images/cout.png'/>
     </div>
     {/* <div class="carousel">
      <div class="carousel_inner">
         <div class="carousel_item carousel_item__active">
            <img src="./images/21.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/58.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/2.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/66.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/57.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/56.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/54.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/20.jpg" alt="" class="carousel_img"/>
         </div>
         <div class="carousel_item">
            <img src="/images/33.jpg" alt="" class="carousel_img"/>
         </div>
      </div>
   </div> */}
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[4]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[5]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[6]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[7]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[8]} />
        </div>
      </Fade>
    </div>
    </div>
  );
}

export default Home;
