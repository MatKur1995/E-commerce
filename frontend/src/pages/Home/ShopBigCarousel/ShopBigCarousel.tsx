import {Carousel} from "react-bootstrap";
import "./ShopBigCarousel.css";

import test4 from "./Bez tytułu.png"
import test5 from "./dddddd.png"
import React from "react";


export const ShopBigCarousel = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item className="carousel-wrapper">
                    <img className="carousel-image" src={test4} alt=""/>
                </Carousel.Item>
                <Carousel.Item className="carousel-wrapper">
                    <img className="carousel-image" src={test5} alt=""/>
                </Carousel.Item>
            </Carousel>
        </>
    );
};