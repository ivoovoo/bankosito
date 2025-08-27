import React, { useState } from 'react';
import img from '../assets/images/credit.svg'
import cardimg from '../assets/images/Group123.svg'
import {
  MdOutlineCreditCard,
  MdExpandMore,
  MdExpandLess,
  MdFlashOn,
  MdClose,
} from 'react-icons/md';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa';
import { GiGoldBar, GiSilverBullet } from 'react-icons/gi';
const data1=[ { label: 'USD', icon: <FaDollarSign />, buy: '$78,92', sell: '$78,92' }, { label: 'EUR', icon: <FaEuroSign />, buy: '$78,92', sell: '$78,92' },
            ]
const data2=[{ label: 'Gold', icon: <GiGoldBar />, buy: '$78,92', sell: '$78,92' },
              { label: 'Silver', icon: <GiSilverBullet />, buy: '$78,92', sell: '$78,92' },
            ]
const DashboardSection = () => {
  const [openLoans, setOpenLoans] = useState(true);
  const [openCurrency, setOpenCurrency] = useState(true);
  return (
    <div className="bg-[#252626] dashboard rounded-2xl text-white min-h-[80vh] p-4 mb-20 space-y-6">
      <div>
        <div
          className="flex justify-between"
         
        >
          <div className="flex items-center  mb-2 cursor-pointer"
          onClick={() => setOpenLoans(!openLoans)}>
             <span className="text-white">
            {openLoans ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
          </span>
          <h2 className="text-[12px] uppercase  text-white">CURRENT LOANS</h2>
          </div>
           
        </div>

        {openLoans && (
          <div className="bg-[#212121B2] rounded-3xl p-5 flex justify-between items-center transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <div className="bg-[#B2D0CE] w-8 h-8 p-2 rounded-xl">
                <img className='w-5 h-5' src={img} alt="" />
              </div>
              <div>
                <div className="text-[15px] mb-[2px] font-normal">Account № 3874825</div>
                <div className="text-[12px] font-medium text-[#79767D]">Expires 12/22/2023</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[15px] mb-[2px] font-normal">$78,92</div>
              <div className="text-[12px] font-medium text-[#79767D]">Rate 3.5%</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#d2f2f0] to-[#eaf6f6] text-black rounded-2xl p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-black text-yellow-400 p-2 rounded-xl">
            <MdFlashOn size={20} />
          </div>
          <div>
            <div className="font-semibold">Start investing now!</div>
            <div className="text-sm text-gray-600">Protected savings and investment plans</div>
          </div>
        </div>
        <button className="text-gray-600 hover:text-black">
          <MdClose size={18} />
        </button>
      </div>

      <div>
      <div
        className="flex items-center mb-2 cursor-pointer"
        onClick={() => setOpenCurrency(!openCurrency)}
      >
        <span className="text-white">
          {openCurrency ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        </span>
        <h2 className="text-[12px] text-white font-medium">CURRENCIES AND METALS</h2>
        
      </div>
      {openCurrency && (
        <>
          <div className="bg-[#212121B2] rounded-xl p-4 space-y-3">
            <div className='flex justify-between'>
               <p className='text-[#79767D] text-[12px] font-normal'>Currencie</p>
               <div className='flex gap-x-12'>
                 <p className='text-[#79767D] text-[12px] font-normal'>Buy</p>
                 <p className='text-[#79767D] text-[12px] font-normal'>Sell</p>
               </div>
            </div>
            {data1.map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-[#B2D0CE] text-black p-1 rounded-md">{item.icon}</div>
                 <p className='text-[15px] font-normal'> {item.label}</p>
                </div>
                <div className='flex items-center gap-x-5'>
                   <div className="className='text-[15px] font-normal">{item.buy}</div>
                <div className="text-[15px] font-normal">{item.sell}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#212121B2] mt-3 rounded-xl p-4 space-y-3">
            <div className='flex justify-between'>
               <p className='text-[#79767D] text-[12px] font-normal'>Metals</p>
               <div className='flex gap-x-10'>
                 <p className='text-[#79767D] text-[12px] font-normal'>Buy</p>
                 <p className='text-[#79767D] text-[12px] font-normal'>Sell</p>
               </div>
            </div>
            {data2.map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-[#B2D0CE] text-black p-1 rounded-md">
                    <img src={cardimg} alt="" />
                  </div>
                 <p className="text-[15px] font-normal"> {item.label}</p>
                </div>
                <div className='flex items-center gap-x-5'>
                   <div className="text-[15px] font-normal">{item.buy}</div>
                    <div className="text-[15px] font-normal">{item.sell}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>

    </div>
  );
};

export default DashboardSection;
