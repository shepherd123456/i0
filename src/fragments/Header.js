import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import HeaderAddressInput from './header/HeaderAddressInput';
import { HeaderSmallNavbar, HeaderSmallMenu } from './header/HeaderSmallNavbar';
import HeaderBranchAndPhone from './header/HeaderBranchAndPhone';
import HeaderMainNavbar from './header/HeaderMainNavbar';

import Logo from '../assets/images/papaluz.jpeg';

const phoneNumber = '775 638 222';
const primaryButton = 'bg-red-500 rounded-xl text-white hover:bg-red-900 hover:transition-colors transition-color';

function Header({ menu_items }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='sticky top-0 shadow-lg bg-white'>
      <nav className='flex flex-wrap'>
        <div className='flex-1 flex'>
          <Link to='/'>
            <img src={Logo} alt="logo" className='h-[5rem]' />
          </Link>
          <HeaderAddressInput primaryBtnStyle />
        </div>
        <div className='w-[1px] hidden sm:block bg-gray-200'>&nbsp;</div>
        <div className="hidden sm:flex flex-1 gap-3 justify-center items-center">
          <HeaderBranchAndPhone primaryBtnStyle={primaryButton} phoneNumber={phoneNumber} />
          <HeaderMainNavbar actions={ACTIONS} phoneNumber={phoneNumber} />
        </div>
        <HeaderSmallNavbar actions={ACTIONS} showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
      <HeaderSmallMenu items={menu_items} showMenu={showMenu} />
    </header>
  )
}

const ACTIONS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'prihlasit'
  },
  {
    icon: <FontAwesomeIcon icon={faBasketShopping} />,
    title: 'kosik'
  },
]

export default Header