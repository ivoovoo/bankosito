import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import cardImg from '../assets/images/image.svg';
import { cards1 } from '../constans';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    if (difference > 5) {
      goNext();
    } else if (difference < -5) {
      goPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const goNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards1.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards1.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto my-8 p-4">
      <div
        className={`relative overflow-hidden w-[311px] rounded-xl shadow-lg text-white p-5 h-[184px] transition-transform duration-500`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #EDFC74, #F5FFA8)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setFlipped(!flipped)}
      >
        {cards1.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 p-6 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Old tomoni */}
            {!flipped && (
              <>
                <div className="flex justify-between items-start">
                  <img className="w-12" src={logo} alt="" />
                  <div className="text-[20px] text-[#272A32] font-bold">{card.amount}</div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <img src={cardImg} alt="" />
                    <div className="text-[15px] text-[#272A32] font-bold">{card.number}</div>
                  </div>
                  <div className="flex flex-col justify-between mt-4">
                    <div className="text-[12px] text-[#272A32] font-medium">{card.valid}</div>
                    <p className="text-[#272A32] text-[15px] font-bold">{card.date}</p>
                  </div>
                </div>
                <p className="text-[#272A32] text-[12px] font-medium">{card.name}</p>
              </>
            )}

            {/* Orqa tomoni */}
            {flipped && (
              <div
                className="flex items-center justify-center w-full h-full"
                style={{
                  transform: 'rotateY(180deg)',
                  // backfaceVisibility: 'hidden',
                }}
              >
                <p className="text-black z-50 text-lg">confidential information</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {cards1.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex
                ? 'bg-[#EDFC74] w-2.5 h-2.5 -translate-y-[2px]'
                : 'bg-gray-300'
            }`}
            onClick={() => goToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
