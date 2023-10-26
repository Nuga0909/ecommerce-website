import React from "react";
import { Link, useLocation } from "react-router-dom";

function YourOrderPage() {
  const location = useLocation();
  const firstName = location.state ? location.state.firstName : "User"; // Use 'User' as a fallback

  return (
    <div className="w-[1440px] h-[666px] pl-[535px] pr-[233px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="h-[278px] flex-col justify-start items-start gap-12 flex">
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="w-[770px] text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
            WELCOME {firstName}!
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              0 orders placed in
            </div>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 justify-start items-start gap-2.5 flex">
              <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                Last 45 days
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[370px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
            You haven’t placed any orders in this period.
          </div>
          <div className="w-[270px] px-6 py-[17px] rounded-[32px] border-2 border-gray-200 justify-center items-start gap-2.5 inline-flex cursur-pointer hover:bg-green-400">
            <div className="w-[133px] text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              <Link to="/">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrderPage;
