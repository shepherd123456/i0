import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'



export function HeaderSmallNavbar({ actions, showMenu, setShowMenu }) {

  return (
    <ul className='sm:hidden flex'>
      <button className='w-[5rem] gap-3 justify-center items-center hover:bg-red-200'>
        <span className='text-red-500'><FontAwesomeIcon icon={faPhone} /></span>
      </button>
      {actions.map((action, i) => (
        <li key={i} className='h-full flex justify-center items-center'>
          <Link className='w-[5rem] h-full flex justify-center items-center hover:bg-red-200'>
            <span className='text-red-500'>{action.icon}</span>
            <span className='hidden lg:inline font-semibold'>{action.title}</span>
          </Link>
        </li>
      ))}
      <li className='h-full flex justify-center items-center'>
        <button
          onClick={() => setShowMenu(prev => !prev)}
          className='w-[5rem] h-full flex justify-center items-center hover:bg-red-200 text-red-500'
        >
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>
      </li>
    </ul>
  )
}

export function HeaderSmallMenu({ items, showMenu }) {
  return (
    <ul className={`sm:hidden absolute w-full ${showMenu ? 'left-0' : '-left-full'} flex flex-col bg-white text-sm drop-shadow-md duration-300`}>
      {items.map((item, i) => (
        <li key={i} className='hover:bg-gray-100 p-2'>
          <Link>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
