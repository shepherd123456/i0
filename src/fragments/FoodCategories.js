import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

function FoodCategories({ main_links }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="hidden mx-auto md:flex flex-wrap justify-center gap-14 border-b-[1px] py-5">
        {main_links.map((category, i) => (
          <Link key={i} to={category.to} className="flex gap-4">
            <span className="text-red-400">{category.icon}</span>
            <span className="font-medium hover:underline underline-offset-[6px] decoration-[4px] decoration-red-600 hover:text-red-600">{category.title}</span>
          </Link>
        ))}
      </div>
      <div className="relative md:hidden flex justify-end mt-4 mr-10">
        <button
          onClick={() => setShowMenu(prev => !prev)}
          className="flex items-center gap-2 bg-red-600 text-white text-sm rounded px-2 py-1"
        >
          <span>Zobrazit kategorie</span>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>
        <div className={`absolute ${showMenu ? 'left-[2.5rem]' : 'hidden'} top-[5rem] flex gap-5 flex-wrap bg-white rounded-xl shadow-md p-2`}>
          {main_links.map((category, i) => (
            <Link key={i} className="flex gap-3 items-center border w-[10rem] px-1 hover:bg-red-200 duration-150">
              <span className="text-red-400">{category.icon}</span>
              <span className="font-medium text-sm">{category.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


export default FoodCategories