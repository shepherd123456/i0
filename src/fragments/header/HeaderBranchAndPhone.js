import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function HeaderBranchAndPhone({ primaryBtnStyle, phoneNumber }) {
  return (
    <div className='hidden lg:flex flex-1 justify-between items-center'>
      <span className='font-semibold ml-4'>Pobocka Frydek-Mistek</span>
      <button className={`${primaryBtnStyle} flex justify-center items-center gap-2 px-10 py-3 whitespace-nowrap`}>
        <FontAwesomeIcon icon={faPhone} />
        <span>{phoneNumber}</span>
      </button>
    </div>
  )
}

export default HeaderBranchAndPhone