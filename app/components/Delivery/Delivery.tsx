import React from 'react'
import Image from 'next/image';
import DeliveryImg from '@/public/images/delivery.svg';
import { RiEBike2Fill } from 'react-icons/ri';
import { IoFastFood } from 'react-icons/io5';
import { BsDoorOpen } from 'react-icons/bs';
const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem] ">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <Image src={DeliveryImg} alt="delivery"  />
            </div>
            <div>
                <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] ">Your <span className="text-red-600">Favorite Burger</span> on the way</h1>
                <p className="mt-[2rem] text-black text-[17px] text-opacity-70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas voluptate pariatur perspiciatis sint adipisci fugit commodi sit illo est.</p>
                <div className="flex items-center space-x-3 mt-[2rem] ">
                    <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600"/>
                    <h1 className="text-[18px] text-black font-medium">Delivery in 30 minutes</h1>
                </div>
                <div className="flex items-center space-x-3 mt-[2rem] ">
                    <IoFastFood className="w-[2rem] h-[2rem] text-red-600"/>
                    <h1 className="text-[18px] text-black font-medium">Free shipping from <span className="text-red-600">18.000</span></h1>
                </div>
                <div className="flex items-center space-x-3 mt-[2rem] ">
                    <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600"/>
                    <h1 className="text-[18px] text-black font-medium">Delivery on you Doorstep</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery