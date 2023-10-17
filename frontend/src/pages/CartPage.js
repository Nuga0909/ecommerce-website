import React from "react";
import close from "../assets/cart/Close.svg";
import minus from "../assets/cart/minus.svg";
import plus from "../assets/cart/plus.svg";
import trash from "../assets/cart/trash-2.svg";

function CartPage() {
  return (
          <div className="screen">
              <div className="absolute w-[605px] h-[1024px] px-10 pt-8 pb-20 bg-white justify-start items-start gap-2.5 inline-flex z-50">
                <div className="flex-col justify-start items-start gap-[428px] inline-flex">
                  <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="justify-start items-start gap-[233px] inline-flex">
                        <div className="w-[268px] text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                          Cart
                        </div>
                        <div className="w-6 h-6 relative">
                          <img src={close} alt="" />
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="w-[525px] text-center text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                          You’re $63 away from shipping
                        </div>
                        <div className="w-[525px] h-4 relative">
                          <div className="w-[525px] h-4 left-0 top-0 absolute rounded-3xl border border-slate-950" />
                          <div className="w-[111.14px] h-4 left-0 top-0 absolute bg-slate-950 rounded-3xl border border-slate-950" />
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-5 inline-flex">
                      <div className="p-[21px] bg-white rounded-3xl border border-gray-200 justify-start items-start gap-2.5 flex">
                        <img
                          className="w-[88px] h-[88px] rounded-2xl"
                          src="https://via.placeholder.com/88x88"
                          alt=""
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                          <div className="justify-start items-start gap-1 inline-flex">
                            <div className="w-[268px] text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                              Sopa Everyday Mask
                            </div>
                            <div className="w-[103px] text-right text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                              $12.00
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[268px] text-slate-500 text-lg font-normal font-['Rubik'] leading-snug">
                              Color: Black
                            </div>
                            <div className="w-[268px] text-slate-500 text-lg font-normal font-['Rubik'] leading-snug">
                              Size: Extra Extra Small
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-start gap-4 inline-flex">
                          <div className="px-5 py-[11px] bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="justify-start items-center gap-4 inline-flex">
                              <div className="w-5 h-5 relative">
                                <img src={minus} alt="" />
                              </div>
                              <div className="w-[34px] text-center text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                                1
                              </div>
                              <div className="w-5 h-5 relative">
                                <img src={plus} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="w-[46px] h-[46px] relative">
                            <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-white rounded-full border border-gray-200" />
                            <div className="w-5 h-5 left-[13px] top-[13px] absolute">
                              <img src={trash} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-20 flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="w-[525px] h-[0px] border border-gray-200"></div>
                      <div className="justify-start items-start gap-1 inline-flex">
                        <div className="w-[418px] text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                          Subtotal
                        </div>
                        <div className="w-[103px] text-right text-slate-950 text-xl font-semibold font-['Rubik'] leading-normal">
                          $12.00
                        </div>
                      </div>
                    </div>
                    <div className="w-[525px] px-10 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                        Continue to Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  );
}

export default CartPage;
