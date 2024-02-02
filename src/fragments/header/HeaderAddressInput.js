import { useEffect, useState } from 'react'

import axios from 'axios';

function HeaderAddressInput() {
  const [searchAddr, setSearchAddr] = useState('');
  const [suggestedAddrs, setSuggestedAddrs] = useState([]);
  const [selectedAddr, setSelectedAddr] = useState({});

  useEffect(() => {
    // async function getAddresses() {
    //   const api_key = process.env.REACT_APP_MAPYCZ_KEY;
    //   const data = await axios.get(`https://api.mapy.cz/v1/suggest?lang=cs&limit=5&type=regional.address&apikey=${api_key}&query=${searchAddr}`);
    //   setSuggestedAddrs(data.data.items);
    // }
    // getAddresses();
  }, [searchAddr])

  useEffect(() => {
    console.log(selectedAddr);
  }, [selectedAddr])

  function onAddrSelected(i) {
    setSelectedAddr(suggestedAddrs[i]);
    setSearchAddr('');
  }

  return (
    <div className='hidden sm:flex flex-1 justify-center items-center'>
      <div className='relative'>
        <input
          type='search'
          value={searchAddr}
          onChange={e => setSearchAddr(e.target.value)}
          placeholder='Zadejte adresu doruceni'
          className='w-[20rem] border border-gray-300 rounded-xl p-3 font-medium'
        />
        {searchAddr && <div className="absolute left-0 top-[100%] bg-white rounded shadow m-1">
          {suggestedAddrs.map((addr, i) => (
            <button key={i} onClick={() => onAddrSelected(i)} className='w-full flex flex-col items-start hover:bg-gray-200 rounded px-2 py-1'>
              <span className='font-medium'>{addr.name}</span>
              <span className='text-xs text-gray-600'>{addr.label} </span>
              <span className='text-xs text-gray-600'>{addr.location}</span>
            </button>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default HeaderAddressInput