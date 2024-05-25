'use client'

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';
import Image from 'next/image';
import { title } from 'process';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
           Burger Pilihan<span className="text-orange-600"> Terbaik</span>
        </h1>
        <div className="w-[80%] mt-[4rem] mx-auto">
            <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}> 
                <BurgerCard title="Beefy Bite Big" image="/images/b1.png" reviews="5" price="14.000"/>
                <BurgerCard title="Cheese Burger Big" image="/images/b2.png" reviews="6" price="15.000"/>
                <BurgerCard title="Burger Beef Cheese Standart" image="/images/b3.png" reviews="5" price="13.000"/>
                <BurgerCard title="Beefy Bite" image="/images/b4.png" reviews="4" price="10.000"/>
                <BurgerCard title="Beefy Bite double" image="/images/b5.png" reviews="6" price="13.000"/>
            </Carousel>
        </div>
    </div>
  )
}

export default PopularBurger