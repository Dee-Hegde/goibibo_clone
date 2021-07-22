import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "./Style/Bus.css"
import { StyleCarouselImgDiv } from "./Style/BusStyle"


export const CarouselCard = () => {

  const breakPoints = [
    { width: 1, itemsToShow:2 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];

  const url = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img1.png"
  
  ]


  return <Carousel className="carousel-div" breakPoints={breakPoints} pagination={false}>

    {url.map((el) => {

      return <StyleCarouselImgDiv>

        <img src={el} alt="error"/>

      </StyleCarouselImgDiv>

    })}

  

  </Carousel>

}