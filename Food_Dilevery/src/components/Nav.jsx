import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { userData } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
const Nav = () => {
  const {input,setInput,cat, setCat,showCard, setShowCard} = useContext(userData)
  useEffect(() => {
    let newList  = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input));
    setCat(newList)
  
    
  }, [input])
  let items = useSelector(state=>state.cart)

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      {/* Logo  */}
      <div className="flex justify-center items-center h-[60px] w-[60px] bg-white rounded-md shadow-xl">
        <IoFastFoodOutline className="w-[30px] h-[30px]  text-green-500 " />{" "}
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
        className="w-[45%] md:w-[70%] h-[60px] bg-white flex items-center
 gap-5 px-5 rounded-md shadow-md"
      >
        <IoSearch className="h-[20px] w-[20px] text-green-500" />
        <input
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Search item...."
          className="w-full outline-none text-[16px] md:text-[20px]"
        />
      </form>
      <div className="flex justify-center items-center h-[60px] w-[60px] bg-white shadow-xl rounded-md relative cursor-pointer hover:scale-100" onClick={()=>setShowCard(true)}>
        <span className="absolute top-0 right-2 font-bold text-green-500 text-[18px]">{items.length}</span>
        <FaShoppingCart className="w-[30px] h-[30px]  text-green-500 " />
      </div>
    </div>
  );
};

export default Nav;
