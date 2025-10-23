import React from 'react'

 import { LuLeafyGreen } from "react-icons/lu";
 import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({name,image,id,type,price}) => {
  const dispatch = useDispatch()
  return (
    <div className='w-[280px] h-[400px] bg-white p-5 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 '>
        {/* image  */}
        <div className='w-[100%] h-[60%]  overflow-hidden rounded-lg'>
 <img src={image} alt="" className='object-cover ' />
        </div>
   
        {/* Item  Name   */}
        <div className='font-semibold'>
{name}
        </div>
        {/* price  */}
        <div className='flex justify-between items-center w-full'>
            <div className='text-lg font-bold text-green-500'>{price}/-</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
      {type === "veg" ? <LuLeafyGreen/> : <GiChickenOven />} <span>{type}</span>

        </div>
        </div>
        {/* button  */}
        <button className='w-full p-3 bg-green-300 text-gray-700 hover:bg-green-400 transition-all duration-500 rounded-xl' onClick={()=>{dispatch(AddItem({id,name,image,price,qty:1}));
      toast.success("Dish add to cart")
      }}>Add to Cart</button>
    </div>
  )
}

export default Card