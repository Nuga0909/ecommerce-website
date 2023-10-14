import React from 'react'

function OojaEveryday() {
  return (
    <div className="w-[1440px] h-[609px] px-[135px] py-20 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-10 flex">
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="text-center text-slate-950 text-5xl font-bold font-['Noto Serif'] leading-[56px]">
            Ooja in Everyday
          </div>
          <div className="text-center text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
            @Ooja
          </div>
        </div>
        <div className="justify-start items-start gap-[30px] inline-flex">
          <img
            className="w-[270px] h-[307px] rounded-2xl"
            src="https://via.placeholder.com/270x307" alt=''
          />
          <img
            className="w-[270px] h-[307px] rounded-2xl"
            src="https://via.placeholder.com/270x307" alt=''
          />
          <img
            className="w-[270px] h-[307px] rounded-2xl"
            src="https://via.placeholder.com/270x307" alt=''
          />
          <img
            className="w-[270px] h-[307px] rounded-2xl"
            src="https://via.placeholder.com/270x307" alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default OojaEveryday