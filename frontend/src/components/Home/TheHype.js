import React from 'react';
import bag1 from '../../assets/bag1.webp'

function TheHype() {
  return (
    <div className="w-[1440px] h-[801px] px-[135px] py-20 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-[30px] inline-flex">
        <div className="pr-6 pt-20 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-10 flex">
            <div className="w-[690px] text-center text-slate-950 text-[56px] font-bold font-['Noto Serif'] leading-[64px]">
              The Hype is real...
            </div>
            <div className="justify-start items-center gap-6 inline-flex">
              <img
                className="w-[409px] h-[449px] rounded-2xl"
                src={bag1} alt=''
              />
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                    borkat u.
                  </div>
                  <div className="justify-start items-start gap-2 flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-5 h-5 relative" />
                    <div className="w-5 h-5 relative" />
                    <div className="w-5 h-5 relative" />
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
                <div className="w-[313px] text-center text-slate-950 text-[28px] font-bold font-['Noto Serif'] leading-loose">
                  These stylishly simple and incredibly comfortable bags have
                  become such a staple in my daily wardrobe that I'm already
                  buying a second one.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-6 bg-zinc-100 rounded-2xl justify-start items-start gap-2.5 flex">
          <div className="flex-col justify-start items-center gap-[63px] inline-flex">
            <img
              className="w-[370px] h-[498px] rounded-tl-2xl rounded-tr-2xl"
              src="https://via.placeholder.com/370x498" alt=''
            />
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[182px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                  Model 000
                </div>
                <div className="w-[182px] text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                  Navy
                </div>
              </div>
              <div className="px-6 py-[17px] bg-lime-300 rounded-[32px] justify-center items-start gap-2.5 flex">
                <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheHype