import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import Card from '../components/Cards';

// import { useNavigate } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";
import { transication } from '../constans';
import { useNavigate } from 'react-router-dom';
const UserCard = () => {
 const navigate=useNavigate()
  return (
    <div className='p-5 py-10 w-full relative  h-full pb-20 bg-black min-h-[100vh]'>
       <div className='flex items-center justify-between'>
          <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
             <GoChevronLeft onClick={()=>navigate(-1)} className='text-white w-5 h-5'/>
          </div>
          <p className='text-white text-[16px] font-medium'>Your cards</p>
           <div></div>
       </div>
            <Card/>

        <div className='w-full bg-[#252626] rounded-2xl py-8 px-6'>
            <div className='flex items-center justify-between'>
              <p className='text-[21px] text-white font-normal'>Transactions</p>
              <div className='bg-[#1E1F1F] w-[82px] h-[34px] justify-center gap-x-2 flex items-center rounded-2xl'>
                 <p className='text-[14px] text-white font-normal'>Filter</p>
                 <IoIosArrowDown className='text-[14px] text-white font-normal'/>
              </div>
            </div>

            <p className='text-white text-[14px] mt-4 mb-2'>Today</p>
            {transication && transication.map((item)=>(
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                  <div style={{backgroundColor:item.color}} className='w-8 h-8 flex rounded-full items-center justify-center'>
                    <img className='w-4 h-4' src={item.imgUrl} alt="" />
                  </div>
                  <div>
                     <p className='text-[16px] text-white font-medium'>{item.title}</p>
                     <p className='text-[#79767D] text-sm '>{item.subtitle}</p>
                  </div>
                </div>
                <p className='text-white text-[16px] font-normal'>{item.price}</p>
              </div>
            ))}

            <p className='text-white text-[14px] mt-4 mb-2'>June 13th</p>
            {transication && transication.map((item)=>(
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                  <div style={{backgroundColor:item.color}} className='w-8 h-8 flex rounded-full items-center justify-center'>
                    <img className='w-4 h-4' src={item.imgUrl} alt="" />
                  </div>
                  <div>
                     <p className='text-[16px] text-white font-medium'>{item.title}</p>
                     <p className='text-[#79767D] text-sm '>{item.subtitle}</p>
                  </div>
                </div>
                <p className='text-white text-[16px] font-normal'>{item.price}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default UserCard
