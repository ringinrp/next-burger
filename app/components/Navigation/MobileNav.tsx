import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props {
  showNav: boolean;
  closeNav: () =>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[100%]";


  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#141414e0]`}>
        <ImCross onClick={closeNav} className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white" />
        <div className={`bg-orange-600 ${navStyle} ttransition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
        <ul className="space-y-10">
        <li className='text-[35px] font-medium hover:text-emerald-500 text-white'>
          <Link href="/">Home</Link>
        </li>
        <li className="text-[35px] font-medium hover:text-emerald-500 text-white">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="text-[35px] font-medium hover:text-emerald-500 text-white">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="text-[35px] font-medium hover:text-emerald-500 text-white">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="text-[35px] font-medium hover:text-emerald-500 text-white">
          <Link href="/blog">Contact</Link>
        </li>
      </ul>
        </div>
    </div>
  )
}

export default MobileNav