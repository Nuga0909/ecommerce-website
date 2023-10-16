import React from 'react'

function ShoeCard() {
  return (
    <div className="w-[270px] h-[463px] rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
      <img
        className="w-[270px] h-[343px] rounded-2xl"
        src="https://via.placeholder.com/270x343"
      />
      <div className="flex-col justify-start items-center gap-4 flex">
        <div className="px-6 py-[17px] rounded-[32px] border-2 border-slate-950 justify-center items-start gap-2.5 inline-flex">
          <div className="w-[133px] text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
            Model 001
          </div>
        </div>
        <div className="w-[270px] text-center text-slate-950 text-xl font-normal font-['Rubik'] leading-normal">
          Supportive & Durable
        </div>
      </div>
    </div>
  );
}

export default ShoeCard