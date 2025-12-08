import React from "react";
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, RemoveItem } from "../redux/cartSlice";


const Card2 = ({name,image,id,price,qty}) => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-[120px] shadow-lg flex justify-between  p-2">
      {/* Left div  */}
      <div className="w-[60%]  h-full flex gap-5">
          {/* image div  */}
        <div className="w-[50%] h-full overflow-hidden ">
            <img src={image} alt="" className="object-cover" />
        </div>
       {/* Name div  */}
        <div className="w-[40%] flex h-full flex-col gap-5">
            {/* name and quntity div  */}
            <div className="text-lg text-gray-600 font-semibold">{name}</div>
            <div className="w-[110px] bg-slate-500 h-[50px] flex rounded-lg overflow-hidden shadow-lg font-semibold text-green-500 border-2 border-green-500 text-xl">
              <button className="h-full w-[30%] bg-white flex items-center justify-center hover:bg-gray-200" onClick={()=>dispatch(incrementQty({id}))}>+</button>
              <span className="h-full w-[60%] bg-slate-200 flex items-center justify-center"> {qty}</span>
              <button className="h-full w-[30%] bg-white flex items-center justify-center hover:bg-gray-200" onClick={()=> qty>1 ? dispatch(decrementQty({id})):1}>-</button>
            </div>
        </div>
      </div>
      {/* Right div  */}
      <div className="flex flex-col justify-start items-end gap-6">
        {/* price and logo  */}
        <span className="text-xl text-green-500 font-semibold">{price}/-</span>
<RiDeleteBin6Line className="h-[30px] w-[30px] text-red-500" onClick={()=>{dispatch(RemoveItem(id))}} />
      </div>
    </div>
  );
};

export default Card2;
