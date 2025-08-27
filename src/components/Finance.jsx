import React from 'react';
import { finance } from '../constans';
const Finance = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide mb-5">
      <h2 className='mt-3 text-white font-medium text-sm'>Finance</h2>
      <div className="flex gap-4 py-4 w-max">
        {finance.map((card) => (
          <div
            key={card.id}
            className={`w-[100px] h-[100px] rounded-2xl p-3.5 bg-[#252626] flex-shrink-0 shadow-md transition `}
          >
            <div style={{backgroundColor:card.color}} className={`p-1 w-8 h-8 flex items-center justify-center text-center rounded-2xl  mb-[12px] bg-[${card.color}]`}>
               <img src={card.img} className='w-[16px] mx-auto h-[16px]' alt="" />
            </div>
            <div className="text-[12px] text-white font-medium">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
