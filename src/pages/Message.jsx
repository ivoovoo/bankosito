import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router";
import dollar from '../assets/images/dollar.svg'
import plus from '../assets/images/+.svg'
import { messages } from "../constans";

 function Message() {
  const navigate=useNavigate()
  return (
    <div className="bg-[#222222] h-screen relative flex pb-20 px-4 pt-4 flex-col">
      <div className=" backdrop-blur-[16px] fixed top-0 right-0 left-0 px-4 text-white py-4 flex items-center justify-between">
        <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
                     <GoChevronLeft onClick={()=>navigate(-1)} className='text-white w-5 h-5'/>
                  </div>
        <p className="text-[16px] font-medium text-white">4435 5677 8865 5678</p>
        <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
                     <FiMoreVertical  className='text-white w-5 h-5'/>
                  </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 space-y-[1px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.type === "sent" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={` px-4 py-2 rounded-2xl my-0 text-black text-sm ${
                msg.type === "sent"
                  ? "bg-[#B2D0CE] w-[156px]"
                  : "bg-[#F2FE8D] w-[136px]" 
              }`}
            >
              <p className="text-[12px] mb-[2px]">{msg.text}</p>
              <p className="text-[21px] font-semibold">{msg.money}</p>
              {msg.title && <div >

                   <div className="border-t-blue-800">{msg.title}</div>
                </div>}
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-1">
          <span className="bg-[#252626] text-center w-[130px] text-[#79767D] text-[12px] px-3 py-1 rounded-full">
            Unread message
          </span>
        </div>
      </div>

      <div  className="flex w-full items-center justify-between gap-x-2">
         <div className="w-8 aspect-square flex items-center justify-center rounded-full bg-[#F2FE8D]">
            <img className="w-[10px] h-4" src={dollar} alt="" />   
         </div>
         <input placeholder="Money or message" className="w-full h-10 placeholder:leading-4 bg-[#1E1E1EB2] placeholder:text-[#79767D] text-white placeholder:text-[12px] placeholder:font-normal  px-4 rounded-2xl" type="text" />
         <div className="w-8 aspect-square flex items-center justify-center rounded-full bg-[#F2FE8D]">
            <img className="w-4 h-4" src={plus} alt="" />   
         </div>
      </div>
    </div>
  );
}

export default Message