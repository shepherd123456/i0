import React from 'react'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faBurger, faDrumstickBite, faPizzaSlice, faTimes, faWineBottle } from "@fortawesome/free-solid-svg-icons"

import Header from '../fragments/Header'
import FoodCategories from '../fragments/FoodCategories'
import Footer from '../fragments/Footer'

function Layout() {
  return (
    <div className='flex flex-col'>
      <Header menu_items={MENU_ITEMS} />
      <FoodCategories main_links={MAIN_LINKS} />
      <div className='h-screen flex flex-col justify-between'>
        <Outlet />
        <Footer main_links={MAIN_LINKS} menu_items={MENU_ITEMS} />
      </div>
    </div>
  )
}

const MENU_ITEMS = [
  {
    title: 'O nas',
  },
  {
    title: 'sluzby'
  },
  {
    title: 'Kontaktuje nas'
  }
]

const MAIN_LINKS = [
  {
    title: 'Poledni Menu',
    icon: <FontAwesomeIcon icon={faBowlFood} />,
    to: '/poledni_menu'
  },
  {
    title: 'Pizza',
    icon: <FontAwesomeIcon icon={faPizzaSlice} />,
    to: '/pizza'
  },
  {
    title: 'Burger',
    icon: <FontAwesomeIcon icon={faBurger} />,
    to: '/burger'
  },
  {
    title: 'Kridelka',
    icon: <FontAwesomeIcon icon={faDrumstickBite} />,
    to: '/kridelka'
  },
  {
    title: 'Napoje',
    icon: <FontAwesomeIcon icon={faWineBottle} />,
    to: '/napoje'
  }
]

export default Layout