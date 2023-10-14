import React from 'react'

function Featured() {
  return (
    <div className="w-[1440px] h-[691px] px-[135px] py-20 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-[1170px] rounded-2xl border border-gray-200 justify-start items-center gap-4 inline-flex">
        <div className="justify-start items-start flex">
          <img
            className="w-[370px] h-[531px] rounded-tl-2xl rounded-bl-2xl"
            src="https://via.placeholder.com/370x531" alt=''
          />
          <div className="h-[531px] px-6 py-[182px] bg-slate-950 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="flex-col justify-center items-center gap-10 flex">
              <div className="px-6 py-[17px] bg-white rounded-[32px] justify-center items-start gap-2.5 inline-flex">
                <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                  Featured
                </div>
              </div>
              <div className="w-[363px] text-center text-white text-[56px] font-bold font-['Noto Serif Lao'] leading-[64px]">
                HUMANS OF NEW YOUK
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-[357px] h-[222px] text-center text-slate-950 text-2xl font-bold font-['Noto Serif Lao'] leading-7">
            Read our co-founder Sidra’s story about struggle, chasing dreams,
            and making shoes.
          </div>
          <div className="px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
            <div className="w-[133px] text-center text-white text-base font-normal font-['Rubik'] leading-snug">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured