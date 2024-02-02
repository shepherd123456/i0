import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/papaluz.jpeg';

function Footer({ main_links, menu_items }) {
  return (
    <div className='flex flex-col'>
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-[8rem] items-start shadow-xl shadow-black px-[2rem] pb-[2rem]'>
        <div className="flex flex-col">
          <img src={Logo} alt="logo" className='w-[4rem]' />
          <span className='font-semibold'>Papaluz s.r.o</span>
          <span className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at cumque aperiam sint. Doloremque nobis quis.</span>
        </div>
        <div className='hidden sm:flex flex-col gap-4 mt-4'>
          <span className='font-semibold'>Prohlizet</span>
          <ul>
            {main_links.map((link, i) => (
              <li key={i} className='py-[2px] hover:bg-gray-50'>
                <Link className='text-gray-600'>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex flex-col gap-4 mt-4">
          <span className='font-semibold'>Akce</span>
          <ul>
            {menu_items.map((menu, i) => (
              <li key={i} className='py-[2px] hover:bg-gray-100'>
                <Link className='text-gray-600 py-[2px]'>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-4">
          <span className='font-semibold'>Kontakt</span>
          <span>Kontaktuje nas na tel</span>
          <strong>775 638 222</strong>
        </div>
      </div >
      <div className='h-full flex justify-between bg-gray-50 text-gray-700 px-[2rem] py-1'>
        <span className=''>© Papaluz</span>
        <Link className='hover:bg-gray-100 px-2 rounded'>privacy policy</Link>
      </div>
    </div>
  )
}

export default Footer