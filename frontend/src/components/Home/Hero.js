import React from 'react';
import hero from '../../assets/Hero Image.jpg';

function Hero() {
  return (
    <div className="w-[1440px] h-[721px] px-[135px] py-8 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-[1170px] h-[657px] relative">
        <img
          className="w-[1170px] h-[657px] left-0 top-0 absolute rounded-2xl"
          src={hero} alt=''
        />
        <div className="w-[1090px] h-[346px] left-[40px] top-[309px] absolute flex-col justify-start items-center gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="w-[1090px] text-white text-[66px] font-bold font-['Noto Serif'] leading-[74px]">
              Step inside, for <br />
              comfort and magic <br />
              await you.
            </div>
            <div className="px-6 py-[17px] bg-lime-300 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
              <div className="w-[133px] text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                Shop Now
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-slate-950 rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero