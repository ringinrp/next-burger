import React from 'react'
import Image from 'next/image'
import Img1 from '@/public/images/f1.jpg'
import Img2 from '@/public/images/f2.jpg'
import Img3 from '@/public/images/f3.jpg'


const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <h1 className="heading">
            Pilih paket yang kamu suka<br />Enak dan
            <span className="text-orange-600"> Nagih</span>
        </h1>
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
            <div>
                <div className="p-6 hover:bg-orange-300 rounded-lg transition-all duration-200">
                    <Image src={Img1} alt="burger" className="rounded-3xl"/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Paket 1</h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis provident distinctio quis nihil quaerat, voluptatum velit repellendus sequi quas odio.
                    </p>
                </div>
            </div>

            <div>
                <div className="p-6 hover:bg-orange-300 lg:translate-y-[4rem] rounded-lg transition-all duration-200">
                    <Image src={Img2} alt="burger" className="rounded-3xl"/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Paket 2</h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis provident distinctio quis nihil quaerat, voluptatum velit repellendus sequi quas odio.
                    </p>
                </div>
            </div>

            <div>
                <div className="p-6 hover:bg-orange-300 rounded-lg transition-all duration-200">
                    <Image src={Img3} alt="burger" className="rounded-3xl"/>
                    <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Paket 3</h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis provident distinctio quis nihil quaerat, voluptatum velit repellendus sequi quas odio.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature