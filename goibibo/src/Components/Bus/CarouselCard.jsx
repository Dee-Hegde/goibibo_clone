import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "./Style/Bus.css"
import { StyleCarouselImgDiv } from "./Style/BusStyle"

export const CarouselCard = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];


  return <Carousel className="carousel-div" breakPoints={breakPoints} pagination={false}>

    <StyleCarouselImgDiv><img src="https://gos3.ibcdn.com/img-1625069014.jpg"></img></StyleCarouselImgDiv>

    <StyleCarouselImgDiv><img src="https://gos3.ibcdn.com/img-1626751565.jpg" /></StyleCarouselImgDiv>

    <StyleCarouselImgDiv><img src="https://gos3.ibcdn.com/top-1601646731.jpg" /></StyleCarouselImgDiv>

    <StyleCarouselImgDiv><img src="https://gos3.ibcdn.com/img-1607921946.jpg" /></StyleCarouselImgDiv>

    <StyleCarouselImgDiv><img src="https://gos3.ibcdn.com/img-1623419538.jpg" /></StyleCarouselImgDiv>

  </Carousel>

}