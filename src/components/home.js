import React from 'react';


function Home() {
  window.addEventListener("load", () => {
    autoSlide();
 })
 
 function autoSlide() {
    setInterval(() => {
       slide(getItemActiveIndex() + 1);
    }, 4000); // slide speed = 3s
 }
 
 function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
 
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const newItemActive = itemsArray[toIndex];
 
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
       newItemActive.classList.add("carousel_item__next");
       itemActive.classList.add("carousel_item__next");
    }, 20);
 
    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
       itemActive.className = "carousel_item";
       newItemActive.className = "carousel_item carousel_item__active";
    }, {
       once: true
    });
 }
 
 function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
 }
  return (
    <div>
        <div className='logo-image'>
     <img src='/images/cout.png'/>
     </div>
     <div class="carousel">
      <div class="carousel_inner">
         <div class="carousel_item carousel_item__active">
            <img src="./images/21.jpg" alt="" class="carousel_img"/>
            <div class="carousel_caption">
            </div>
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
   </div>
    </div>
  );
}

export default Home;
