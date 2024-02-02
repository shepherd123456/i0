import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function HeaderMainNavbar({ actions, phoneNumber }) {
  return (

    <div className='h-full flex'>
      <button className='w-[10rem] h-full flex lg:hidden gap-3 justify-center items-center hover:bg-red-200'>
        <span className='text-red-500'><FontAwesomeIcon icon={faPhone} /></span>
        <span className='font-semibold'>{phoneNumber}</span>
      </button>
      <ul className='h-full flex'>
        {actions.map((action, i) => (
          <li key={i} className='h-full flex justify-center items-center'>
            <div className='w-[1px] h-full bg-gray-200'>&nbsp;</div>
            <Link className='w-[10rem] h-full flex gap-3 justify-center items-center hover:bg-red-200'>
              <span className='text-red-500'>{action.icon}</span>
              <span className='font-semibold'>{action.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderMainNavbar