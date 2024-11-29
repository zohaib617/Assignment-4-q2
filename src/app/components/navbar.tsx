"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<>
<div className="  flex-wrap p-8   sticky top-0 z-50" >
<nav className="   flex justify-between items-center flex-wrap p-2   bg-white" >

<div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72" >
<div className="block lg:hidden "> 
  <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col justify-center  gap-1 focus mr-8">
            <span
              className={`block w-6 h-0.5 bg-black transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
    </div>
 
<a  href=""   className="  font-sans  font-extrabold text-3xl items-center text-gray-900  md:mb-0">
SHOP.CO</a></div>
    
<div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? " block" :" hidden" }`} >
<div className="text-sm lg:flex-grow" >
<select name="mybox" id="mydro" className="bg-gray-100 p-2 rounded-md text-sm block mt-4 lg:inline-block lg:mt-0 mr-4">
<option value="shop">Shop</option>
<option value="online">Online</option>
</select>
<a href="#top-selling" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"> On Sale</a>
<a href="#arrivals" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"> New Arivel</a>
<a href="#browse" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"> Brand</a>
<input className="  bg-[#F0F0F0] w-0 h-0  lg:w-[577px] lg:h-[48px] rounded-md" type="text"  placeholder=" 🔍Serach prodeuct..."/>



</div>
</div>



<div className="  ">
<i className=" lg:hidden fas fa-search mr-2 " ></i>
<i className="fa-solid fa-cart-shopping"></i>
<i className="fa-regular fa-user ml-2 border-2 rounded-full border-black p-1"></i>
</div>
</nav>

</div>

</>
  );
}
