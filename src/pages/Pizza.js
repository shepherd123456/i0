import axios from "axios";
import { useEffect, useState } from "react"

const BASE_URL = 'http://localhost:8080';
const PRODUCT_URL = `${BASE_URL}/products`;
const IMAGE_URL = `${BASE_URL}/images`;

function Pizza() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(PRODUCT_URL);
      console.log(res.data);
      setProducts(res.data);
    }
    getProducts();
  }, []);

  return (
    <div className='px-[5rem] mt-10'>
      <h1 className='text-2xl font-bold uppercase'>Pizza</h1>
      <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] my-4'>
        {products.map((pizza, i) => (
          <div
            key={i}
            className='flex flex-col items-center border cursor-pointer rounded-2xl'
            onClick={() => console.log(`pizza [${pizza.title}] clicked`)}
          >
            <img src={`${IMAGE_URL}/${pizza.filename}`} alt={pizza.title} className='w-[12rem] hover:w-[14rem] duration-300' />
            <div className='group h-full flex flex-col rounded-b-2xl hover:bg-red-500 p-5 duration-300'>
              <span className='font-semibold group-hover:text-white'>{`${i}. ${pizza.title}`}</span>
              <span className='h-[5rem] text-xs text-gray-500 group-hover:text-white'>{pizza.description}</span>
              <span className='font-medium group-hover:text-white'>{pizza.price} czk</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// const FOOD_ITEMS = [
//   {
//     img_url: '/assets/images/zampionova.jpg',
//     title: 'Zampionova',
//     description: 'Tomat, eidam, šunka, žampióny (1a,7)*',
//     price: 189
//   },
//   {
//     img_url: '/assets/images/ostravska.jpg',
//     title: 'Ostravska',
//     description: 'Tomat, eidam, šunka, anglická slanina, klobása, vejce, kozí rohy (1a,3,7)*',
//     price: 179
//   },
//   {
//     img_url: '/assets/images/s_peti_druhy_salamu.jpg',
//     title: 'S peti druhy salamu',
//     description: 'Tomat, eidam, šunka, vysočina, anglická slanina, klobása, paprikový salám, kozí rohy (1a,7)* ',
//     price: 189
//   },
//   {
//     img_url: '/assets/images/banicek.jpg',
//     title: 'Banicek',
//     description: 'OSTRÁ!!! Tomat, eidam, šunka, vysočina, kukuřice, chilli, uzený eidam, paprika (1a,7,12)* ',
//     price: 199
//   },
//   {
//     img_url: '/assets/images/anglicak.jpg',
//     title: 'Anglicak',
//     description: 'Tomat, eidam, anglická slanina, cibule, česnek (1a,7)* ',
//     price: 179
//   },
//   {
//     img_url: '/assets/images/tri_cunici.jpg',
//     title: 'Tri cunici',
//     description: 'Tomat, eidam, vepřová panenka, šunka, anglická slanina, paprika, cibule, česnek (1a,7)* ',
//     price: 189
//   },
//   {
//     img_url: '/assets/images/kureci_pochoutka.jpg',
//     title: 'Kureci pochoutka',
//     description: 'Tomat, eidam, šunka, kuřecí maso, rajče, ementál, olivy (1a,7,10)* ',
//     price: 199
//   },
// ]

export default Pizza