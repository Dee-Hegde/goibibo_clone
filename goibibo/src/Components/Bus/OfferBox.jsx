import React, { useEffect, useRef } from 'react'
import { StyleOfferBox } from './Style/BusStyle'
import { CarouselCard } from './CarouselCard';
import { CarouselTextBox } from './CarouselTextBox';

export const OfferBox = () => {

    const [imageIndex, setImageIndex] = React.useState(0);
    const imgs = ["https://gos3.ibcdn.com/gosafe1-1593079151.png", "https://gos3.ibcdn.com/gosafe4-1593079262.png", "https://gos3.ibcdn.com/gosafe3-1593079233.png"];


    React.useEffect(() => {

        setInterval(() => {

            setImageIndex((prev) => {

                if (prev > 1) {

                    return prev - 2

                }
                else {

                    return prev + 1;

                }

            });

        }, 3000);

    }, []);


    return (
        <StyleOfferBox>


            <div className="slide-show-cont">
                <img src={imgs[imageIndex]} alt="error" />
            </div>

            <div style={{ borderRadius: "15px", padding: "0%", marginTop: "3%" }}>

                <div>
                    <CarouselCard></CarouselCard>
                </div>



            </div>

        </StyleOfferBox>
    )
}
