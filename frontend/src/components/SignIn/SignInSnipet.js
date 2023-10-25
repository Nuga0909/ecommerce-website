import React from 'react';
import { Link } from 'react-router-dom';

function SignInSnipet() {
  return (
    <div className="w-[1440px] h-[666px] px-[485px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-[60px] flex">
        <div className="w-[470px] text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
          Sign in.
        </div>
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[470px] px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
              <div className="w-[450px] text-neutral-300 text-base font-normal font-['Rubik'] leading-snug">
                Email address
              </div>
            </div>
            <div className="w-[470px] px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                Sign in
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              New to Ooja?
            </div>
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] underline leading-snug">
              <Link className="create-account" to="/create-account">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSnipet