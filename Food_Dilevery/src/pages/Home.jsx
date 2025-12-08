import { RxCross2 } from "react-icons/rx";
import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { catagories } from "../categery";
import Card from "../components/Card";
import { food_items } from "../food";
import { userData } from "../context/UserContext";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const { cat, setCat, input, showCard, setShowCard } = useContext(userData);

  const fillter = (catagory) => {
    if (catagory === "All") {
      setCat(food_items);
    } else {
      let foodList = food_items.filter(
        (item) => item.food_category === catagory
      );
      setCat(foodList);
    }
  };
  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let dilevery_fees = 20;
  let taxes = (subTotal * 0.5) / 100;
  let granTotal = Math.floor(subTotal + dilevery_fees + taxes);
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex items-center justify-center flex-wrap gap-5">
          {catagories.map((item, index) => (
            <div
              key={index}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start justify-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-xl shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => fillter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
      {/* Categories  */}

      {/* Cards  */}
      <div className="w-full flex justify-center items-center flex-wrap pt-8 px-5 gap-5 pb-8">
       {cat.length>1? cat.map((item) => (
          <Card
            id={item.id}
            image={item.food_image}
            name={item.food_name}
            price={item.price}
            type={item.food_type}
            key={item.id}
          />
        )):<div className="text-4xl text-green-400 pt-5 font-semibold"> No Dish was found </div>}
      </div>

      {/* sidebar Cart  */}
      <div
        className={` ${
          showCard ? "translate-x-0" : "translate-x-full"
        } w-full md:w-[40vw] p-5 shadow-xl h-screen fixed top-0 right-0 bg-white transition-all duration-500 flex flex-col items-center overflow-auto`}
      >
        <header className="w-full flex justify-between items-center ">
          <span className="text-green-500 text-[18px] semibold ">
            Order items
          </span>
          <RxCross2
            onClick={() => setShowCard(false)}
            className="text-[18px] text-green-400 font-semibold h-[30px] w-[30px] cursor-pointer hover:text-gray-600"
          />
        </header>
        {items.length>0 ?   <>

           <div className="flex w-full mt-8 flex-col gap-5">
          {items.map((item, index) => (
            <Card2
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              qty={item.qty}
              key={index}
            />
          ))}
        </div>
        {/* price and place order  */}
        <div className="border-t-2 border-b-2 w-full border-r-gray-400 mt-7 flex  flex-col gap-4 p-8">
          {/* subTotal  */}
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">
              Sub Total
            </span>
            <span className="font-semibold text-xl text-green-400">
              Rs {subTotal}/-
            </span>
          </div>
          {/* dilevery_fees  */}
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">
              Delivery Fees
            </span>
            <span className="font-semibold text-xl text-green-400">
              Rs {dilevery_fees}/-
            </span>
          </div>
          {/* taxes  */}
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Taxes</span>
            <span className="font-semibold text-xl text-green-400">
              Rs {taxes}/-
            </span>
          </div>
        </div>
        {/* grandToatal  */}
        <div className="flex justify-between items-center p-9 text-2xl w-full">
          <span className="text-lg text-gray-600 font-semibold"> Total</span>
          <span className="font-semibold text-xl text-green-400">
            Rs {granTotal}/-
          </span>
        </div>
        <button className='w-[80%] p-3 bg-green-300 text-gray-700 hover:bg-green-400 transition-all duration-500 rounded-xl' onClick={()=>toast.success("Order Placed successfully")}>Placed Order</button>

       </> : <div className="text-2xl text-green-400 pt-5 font-semibold">
        Empty Cart 
       </div> }
     
      </div>
    </div>
  );
};

export default Home;
