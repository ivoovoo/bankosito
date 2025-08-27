import React, { useState } from 'react';
import visaLogo from '../assets/images/logo.svg';
import masterLogo from '../assets/images/masterCard.jpg';
import uzcardLogo from '../assets/images/uzCard.jpg';
import { useNavigate } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";

const Transfer = () => {
  const [amount, setAmount] = useState('');
  const [recipientCardNumber, setRecipientCardNumber] = useState('');
  const [recipientCardType, setRecipientCardType] = useState('Visa');
  const [myCardNumber, setMyCardNumber] = useState('');
  const [myCardType, setMyCardType] = useState('Visa');
  const [activeInput, setActiveInput] = useState('amount'); // faollik uchun

  const navigate = useNavigate();

  const handleKeyPress = (value) => {
    if (activeInput === 'amount') {
      if (value === 'x') {
        setAmount((prev) => prev.slice(0, -1));
      } else {
        setAmount((prev) => prev + value);
      }
    } else if (activeInput === 'recipient') {
      if (value === 'x') {
        setRecipientCardNumber((prev) => prev.slice(0, -1));
      } else {
        setRecipientCardNumber((prev) =>
          (prev + value).replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
        );
      }
    } else if (activeInput === 'mycard') {
      if (value === 'x') {
        setMyCardNumber((prev) => prev.slice(0, -1));
      } else {
        setMyCardNumber((prev) =>
          (prev + value).replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
        );
      }
    }
  };
  
  const numbers = ['1','2','3','4','5','6','7','8','9','0','x'];

  const cards = {
    Visa: {
      logo: visaLogo,
      balance: 5200.15,
      lastDigits: '5534',
      placeholder: "4XXX XXXX XXXX XXXX"
    },
    MasterCard: {
      logo: masterLogo,
      balance: 3200.50,
      lastDigits: '8899',
      placeholder: "5XXX XXXX XXXX XXXX"
    },
    Uzcard: {
      logo: uzcardLogo,
      balance: 2780.00,
      lastDigits: '3344',
      placeholder: "8600 XXXX XXXX XXXX"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1B1B1B] text-white px-5 py-6 pb-20 space-y-6">
      <div className='flex items-center justify-between'>
        <div 
          onClick={() => navigate(-1)}
          className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'
        >
          <GoChevronLeft className='text-white w-5 h-5'/>
        </div>
        <p className='text-white text-[16px] font-medium'>Transfer</p>
        <div></div>
      </div>

      <div className="space-y-2 mt-3">
        <div 
          className={`bg-[#363339] w-[327px] h-12 rounded-xl px-4 py-3 flex justify-between items-center text-lg tracking-widest ${activeInput==='recipient' ? 'ring-2 ring-yellow-400' : ''}`}
          onClick={() => setActiveInput('recipient')}
        >
          <input 
            type="text"
            readOnly
            value={recipientCardNumber}
            inputMode="numeric"  
             maxLength={16}
            placeholder={cards[recipientCardType].placeholder}
            className="bg-transparent outline-none text-white w-full text-[14px] tracking-widest cursor-pointer"
          />
          <select
            value={recipientCardType}
            onChange={(e) => setRecipientCardType(e.target.value)}
            className="bg-[#2C2C2E] text-white p-1 rounded-xl border-none text-[12px] outline-none ml-2"
          >
            {Object.keys(cards).map((card) => (
              <option key={card} value={card}>{card}</option>
            ))}
          </select>
        </div>
      </div>

      <div 
        className={`text-center text-[32px] font-bold cursor-pointer ${activeInput==='amount' ? 'text-yellow-300' : ''}`}
        onClick={() => setActiveInput('amount')}
      >
        ${amount || '0'}
      </div>

      <div className="rounded-xl px-4 py-3 flex justify-between items-center bg-[#2C2C2E]">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full">
            <img className='w-12 rounded-2xl h-10' src={cards[myCardType].logo} alt={myCardType} />
          </div>
          <div>
            <select 
              value={myCardType} 
              onChange={(e) => setMyCardType(e.target.value)} 
              className="bg-[#2C2C2E] text-white p-1 rounded-xl border-none text-[16px] outline-none"
            >
              {Object.keys(cards).map((card) => (
                <option key={card} value={card}>{card}</option>
              ))}
            </select>
            <div className="text-sm text-gray-400">
              $ {cards[myCardType].balance.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-400">
          •• {cards[myCardType].lastDigits}
        </div>
      </div>
      <button className="w-full py-3 rounded-full cursor-pointer font-semibold text-[15px] text-black bg-gradient-to-l from-[#FCFFDF] to-[#F1FE87]">
        Send
      </button>

      <div className="grid grid-cols-3 gap-2.5 pt-4">
        {numbers.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className="bg-[#2C2C2E] cursor-pointer rounded-full py-4 text-xl font-semibold hover:scale-105 transition"
          >
            {key === 'x' ? '⌫' : key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Transfer;
