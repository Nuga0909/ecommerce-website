import React from "react";
import logo from "../../assets/cover.png";
import cart from "../../assets/shopping-bag.jpg";
import user from "../../assets/user.jpg";
import { useState } from "react";
import CartPage from "../../pages/CartPage";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <div className="w-[1440px] h-32 pb-5 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-5 flex">
        <div className="w-[1440px] p-2.5 bg-slate-950 justify-center items-start gap-2.5 inline-flex">
          <div className="text-white text-base font-normal font-['Rubik'] leading-snug">
            Free shipping to Nigeria on order of $80+
          </div>
        </div>
        <div className="justify-start items-center gap-[195px] inline-flex">
          <div className="justify-start items-center gap-[207px] flex">
            <div className="w-36 h-[46px] py-[11.04px] justify-center items-center flex">
              <div className="w-36 h-[83.92px] relative">
                <div className="w-[12rem] h-[22.54px] left-0 top-[1.38px] absolute">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-6 flex">
              <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                <Link className="men" to="/men">
                  Men
                </Link>
              </div>
              <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                Bags
              </div>
              <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                Accessories
              </div>
              <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                About
              </div>
              <div className="px-3 py-2 bg-white rounded-3xl border border-green-400 justify-start items-start gap-2.5 flex">
                <div className="text-green-400 text-base font-normal font-['Rubik'] leading-snug">
                  Shoe Finder Quiz
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-6 flex">
            <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              Support
            </div>
            <div className="w-6 h-6 relative">
              <Link to="/signin">
                <img src={user} alt="" />
              </Link>
            </div>
            <div className="w-6 h-6 relative">
              <img src={cart} alt="" onClick={handleShowCart} />
            </div>
          </div>
        </div>
        {showCart && <CartPage />}
      </div>
    </div>
  );
}

export default NavigationBar;
