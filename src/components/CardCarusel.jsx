import React from 'react';
import logo from '../assets/images/logo.svg'
import { cards } from '../constans';

const CardCarousel = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4  py-4 w-max">
        {cards.map((card) => (
          <div
           style={{ background: card.gradient }}
            key={card.id}
            className={`w-[148px]  h-[170px] rounded-2xl py-6 px-4 ${card.bg} flex-shrink-0 shadow-md transition hover:scale-105 duration-300`}
          >
            <img src={logo} className='w-10 h-5 mb-7' alt="" />
            <div className="mt-2 text-[12px] font-medium text-[#272A32]">{card.title}</div>
            <div className="text-[17px] font-bold text-[#272A32]">{card.amount}</div>
            <div className="mt-6 text-xs text-gray-500">{card.cardNo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
