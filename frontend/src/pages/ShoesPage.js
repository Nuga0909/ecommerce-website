import React from "react";
import NavigationBar from "../components/Home/NavigationBar";

function ShoesPage() {
  return (
    <>
      <NavigationBar />
      <div className="w-[1440px] h-[649px] px-[435px] py-8 bg-zinc-100 justify-start items-start gap-2.5 inline-flex">
        <div className="flex-col justify-start items-center gap-[60px] inline-flex">
          <div className="justify-start items-start gap-[30px] inline-flex">
            {/* Items in the list */}
          </div>
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-slate-950 text-xl font-normal font-['Rubik'] leading-normal">
              Not sure?
            </div>
            <div className="w-56 h-[22px] justify-start items-center gap-3 inline-flex">
              <div className="text-center text-blue-500 text-base font-normal font-['Rubik'] underline leading-snug">
                Take the Shoe Finder Quiz
              </div>
              <div className="w-5 h-5 relative origin-top-left rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoesPage;
