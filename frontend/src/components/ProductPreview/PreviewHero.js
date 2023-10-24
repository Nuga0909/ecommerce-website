import React from "react";
import star from "../../assets/star.svg";
import { useLocation } from "react-router-dom";

function PreviewHero() {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className="w-[1440px] h-[708px] px-[135px] pt-10 pb-20 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-[30px] inline-flex">
        <img
          className="w-[770px] h-[588px]"
          src={`http://localhost:3000/uploads/${product.imageName}`}
          alt={product.productName}
        />

        <div className="flex-col justify-start items-start gap-[54px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="justify-end items-center gap-[70px] inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[200px] text-slate-950 text-xl font-normal font-['Rubik'] leading-normal">
                  {product.productName}
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <img src={star} alt="" />
                    </div>
                    <div className="w-4 h-4 relative">
                      <img src={star} alt="" />
                    </div>
                    <div className="w-4 h-4 relative">
                      <img src={star} alt="" />
                    </div>
                    <div className="w-4 h-4 relative">
                      <img src={star} alt="" />
                    </div>
                    <div className="w-4 h-4 relative">
                      <img src={star} alt="" />
                    </div>
                  </div>
                  <div className="w-20 text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                    4.7(3205)
                  </div>
                </div>
              </div>
              <div className="w-[100px] text-right text-slate-950 text-2xl font-bold font-['Noto Serif Lao'] leading-7">
                {`$${product.price}`}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-[270px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                Color: White
              </div>
              <div className="justify-end items-center gap-2 inline-flex">
                <div className="justify-end items-center gap-2 flex">
                  <div className="w-8 h-8 relative">
                    <div className="w-8 h-8 left-0 top-0 absolute rounded-full border border-slate-950" />
                    <div className="w-6 h-6 left-[4px] top-[4px] absolute bg-white rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-slate-950 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-slate-500 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-purple-600 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-lime-300 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 bg-green-400 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-orange-500 rounded-full shadow-inner" />
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-blue-500 rounded-full shadow-inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-start gap-[30px] inline-flex">
                  <div className="w-[196px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                    Size
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-[116px] text-right text-slate-500 text-lg font-normal font-['Rubik'] leading-snug">
                      Size Guide
                    </div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-[286px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                    US 9
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[370px] px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
                  <div className="w-[133px] text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                    {`Add to bag $${product.price}`}
                  </div>
                </div>
                <div className="pl-2.5 justify-end items-center gap-[17px] inline-flex">
                  <div className="text-center text-slate-950 text-xs font-normal font-['Rubik'] leading-none">
                    4 payments of $75 using
                  </div>
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="text-center text-slate-950 text-xs font-medium font-['Rubik'] leading-none">
                      Shop
                    </div>
                    <div className="px-2 py-0.5 bg-slate-950 rounded-lg justify-start items-start gap-2.5 flex">
                      <div className="text-center text-white text-xs font-normal font-['Rubik'] leading-none">
                        Pay
                      </div>
                    </div>
                    <div className="text-center text-slate-950 text-xs font-normal font-['Rubik'] leading-none">
                      Or
                    </div>
                    <div className="text-center text-slate-950 text-xs font-medium font-['Rubik'] leading-none">
                      afterpay
                    </div>
                  </div>
                </div>
                <div className="text-center text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                  Free shipping internationally on orders over $200
                </div>
              </div>
              <div className="w-[370px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewHero;
