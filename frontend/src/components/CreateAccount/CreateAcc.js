import React from "react";
import { Link } from "react-router-dom";

function CreateAcc() {
  return (
    <div className="w-[1440px] h-[666px] px-[485px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-[60px] flex">
        <div className="w-[470px] text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
          Create an Account.
        </div>
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[470px] h-[68px] relative">
              <div className="w-[470px] h-14 left-0 top-[12px] absolute bg-white rounded-2xl border border-blue-500" />
              <div className="left-[10px] top-0 absolute flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="px-2 py-1 bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
                  <div className="text-blue-500 text-xs font-normal font-['Rubik'] leading-none">
                    Email address
                  </div>
                </div>
                <div className="w-[450px] text-blue-500 text-base font-normal font-['Rubik'] leading-snug">
                  Adeshina2042@gmail.com
                </div>
              </div>
            </div>
            <div className="w-[470px] h-[68px] relative">
              <div className="w-[470px] h-14 left-0 top-[12px] absolute bg-white rounded-2xl border border-red-500" />
              <div className="left-[10px] top-0 absolute flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="px-2 py-1 bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
                  <div className="text-red-500 text-xs font-normal font-['Rubik'] leading-none">
                    Password
                  </div>
                </div>
                <div className="w-[450px] text-red-500 text-base font-normal font-['Rubik'] leading-snug">
                  2042@54224
                </div>
              </div>
            </div>
            <div className="w-[470px] px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                Create Account
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              Already have an account?
            </div>
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] underline leading-snug">
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAcc;
