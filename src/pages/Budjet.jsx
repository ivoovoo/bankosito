import React from "react";
import { FiArrowLeft, FiFilter } from "react-icons/fi";
import { GoChevronLeft } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { SiUnsplash } from "react-icons/si";
import filter from '../assets/images/filter.svg'
import { useNavigate } from "react-router-dom";
import { group } from "../constans";
const MyBudget = () => {
  const navigate=useNavigate()
  return (
    <div className="h-screen bg-black pt-6 px-5 text-white">
     <div className='flex items-center justify-between mb-8'>
               <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
                  <GoChevronLeft onClick={()=>navigate(-1)} className='text-white w-5 h-5'/>
               </div>
               <p className='text-white text-[16px] font-medium'>Your cards</p>
                <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
                  <img  className='text-white w-5 h-5' src={filter} alt="" />
               </div>
            </div>

      <div className="bg-[#212121] rounded-[30px] h-[88px] py-5 px-6 flex items-center justify-between mb-6">
       <div>
           <h2 className="text-[21px] leading-6 font-semibold mb-1">$1,345</h2>
           <p className="text-white leading-4 text-[12px]">September send $2,010</p>
       </div>
        <p className="text-white leading-4 text-[12px]">June, 2020</p>
      </div>
      <div className="relative mb-6">
        <div className="h-32 bg-[#252527] rounded-md flex items-end justify-center">
          
          <div className="absolute bottom-2 flex justify-between w-full px-2 text-xs text-gray-400">
            <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
          </div>
        </div>
      </div>
      <div className="w-10 h-1.5 bg-gray-500 rounded-full mx-auto mb-4" />
      <div className="bg-[#1C1C1E] rounded-xl p-4 space-y-4">
        <h3 className="text-white text-[21px] leading-6">June 15, 2020</h3>

        <div>
           {group && group.map((item)=>(
          <div className="flex items-start py-2 justify-between">
               <div className="flex items-center gap-x-3">
                  <img className="w-8 h-8" src={item.imgulr} alt="" />
                  <div>
                    <p className="text-[16px] leading-5">{item.num}</p>
                    <p className="text-[#79767D] text-sm">{item.title}</p>
                  </div>
               </div>
               <p className="text-[16px]">{item.price}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MyBudget;
