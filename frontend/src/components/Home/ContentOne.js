import React from 'react'
import vogue from "../../assets/vogue-logo.jpg";


function ContentOne() {
  return (
    <div className="w-[1440px] h-[546px] px-[135px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="px-[100px] py-20 bg-zinc-100 rounded-3xl flex-col justify-start items-start gap-2.5 flex">
        <div className="flex-col justify-start items-center gap-[60px] flex">
          <div className="w-[970px] text-center text-slate-950 text-[40px] font-bold font-['Noto Serif'] leading-[46px]">
            “These are the most thoughtfully designed sneakers on the market.”
          </div>
          <div className="justify-start items-center gap-[187px] inline-flex">
            <div className="w-56 h-[57px] relative" ><img src={vogue} alt="" /></div>
            <div className="w-[253px] text-center text-slate-500 text-[66px] font-bold font-['Noto Serif'] leading-[74px]">
              esquire
            </div>
            <div className="text-center text-slate-500 text-xl font-normal font-['Rubik'] leading-normal">
              HUMANS OF <br />
              NEW YORK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentOne