import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
            <div>
                <div className="flex items-center text-white space-x-2">
                <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] text-orange-500" />
                <h1 className="text-[20px] sm:text-[30px] font-semibold">BURGERNESIA</h1>
                </div>
                <p className="text-white text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic, ut reprehenderit dolores aspernatur vero asperiores quae quis beatae pariatur?</p>
                <p className="mt-[1rem] text-white">ringinrp21@gmail.com</p>
                <p className="text-red-400 font-bold text-[19px]">(+62)85156 xxxxxx</p>
            </div>
            <div>
                <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Product</h1>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Chicken Burger</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Beef Burger</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Cheese Burger</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Crispy Burger</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Cheese Burger Big</p>
            </div>
            <div>
                <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Quick Link</h1>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Home</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">About</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Menu</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Product</p>
                <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Newsletter</p>
            </div>
            <div>
            <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Opening Hours</h1>
            <p className='text-white text-[18px]'>Monday - Friday : <span className='text-yellow-300 text-[18px]'>8am - 4pm</span></p>
            <p className='text-white text-[18px]'>Saturday : <span className='text-yellow-300 text-[18px]'>8am - 12pm</span></p>
            <div className="flex mt-[2rem] items-center space-x-6">
                <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-600"/>
                <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400"/>
                <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300"/>
            </div>
            </div>
        </div>
        <p className="text-center text-white opacity-50 mt-[1.5rem]">Copyright 2024. All rights reserved</p>
    </div>
  )
}

export default Footer
