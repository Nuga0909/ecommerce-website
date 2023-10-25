import React from 'react'

function CheckoutPage() {
  return (
    <div className="w-[1440px] h-[1467px] pl-[135px] bg-white justify-end items-start gap-[30px] inline-flex">
      <div className="self-stretch px-5 py-20 bg-white justify-start items-start gap-2.5 inline-flex">
        <div className="flex-col justify-start items-start gap-12 inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="w-[630px] text-slate-950 text-[28px] font-bold font-['Noto Serif Lao'] leading-loose">
                    Sopas
                  </div>
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                      <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        Information
                      </div>
                      <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        Shipping
                      </div>
                      <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        Payment
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[630px] h-[110px] relative">
                  <div className="w-[630px] h-24 left-0 top-[14px] absolute bg-white rounded-lg border border-gray-200" />
                  <div className="w-[590px] h-[86px] left-[20px] top-0 absolute flex-col justify-start items-center gap-2 inline-flex">
                    <div className="px-4 py-1 bg-white rounded-[36px] justify-start items-start gap-2.5 inline-flex">
                      <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        Express checkout
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <div className="w-[186px] h-12 relative">
                        <div className="w-[186px] h-12 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
                        <img
                          className="w-[94px] h-[34px] left-[46px] top-[7px] absolute"
                          src="https://via.placeholder.com/94x34"
                        />
                      </div>
                      <div className="w-[186px] h-12 relative">
                        <div className="w-[186px] h-12 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
                        <img
                          className="w-[90px] h-[27px] left-[48px] top-[11px] absolute"
                          src="https://via.placeholder.com/90x27"
                        />
                      </div>
                      <div className="w-[186px] h-12 relative">
                        <div className="w-[186px] h-12 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
                        <img
                          className="w-[60px] h-[29px] left-[63px] top-[10px] absolute"
                          src="https://via.placeholder.com/60x29"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-[9px] inline-flex">
                <div className="w-[297px] h-[0px] border border-gray-200"></div>
                <div className="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                  Or
                </div>
                <div className="w-[298px] h-[0px] border border-gray-200"></div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-5 inline-flex">
                <div className="w-[339px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Contact information
                </div>
                <div className="text-right">
                  <span style="text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                    Already have an account?
                  </span>
                  <span style="text-blue-500 text-lg font-normal font-['Rubik'] leading-snug">
                    {" "}
                    Log in
                  </span>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                    borkat2042@gmail.com
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded border border-gray-200" />
                  </div>
                  <div className="w-[594px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                    Email me with news and offers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[630px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                Shipping address
              </div>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                      Country/region
                    </div>
                  </div>
                  <div className="justify-start items-start gap-5 inline-flex">
                    <div className="h-14 px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        First name (optional)
                      </div>
                    </div>
                    <div className="h-14 px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Last name
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                      Company (optional)
                    </div>
                  </div>
                  <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                      Address
                    </div>
                  </div>
                  <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                      Apartment, suite, etc. (optional)
                    </div>
                  </div>
                  <div className="justify-start items-start gap-5 inline-flex">
                    <div className="h-14 px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        City
                      </div>
                    </div>
                    <div className="h-14 px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Postal code
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-[17px] bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[590px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                      Phone-Receive SMS support
                    </div>
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded border border-gray-200" />
                    </div>
                    <div className="w-[594px]">
                      <span style="text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        Text me with news and offers.
                        <br />
                        <br />
                      </span>
                      <span style="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                        By signing up via text, you agree to receive recurring
                        automated marketing messages, including cart reminders,
                        at the phone number provided. Consent is not a condition
                        of purchase. Reply STOP to unsubscribe. Reply HELP for
                        help. Message frequency varies. Msg & data rates may
                        apply. View our{" "}
                      </span>
                      <span style="text-blue-500 text-sm font-medium font-['Rubik'] underline leading-[18px]">
                        Privacy Policy
                      </span>
                      <span style="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                        {" "}
                        and{" "}
                      </span>
                      <span style="text-blue-500 text-sm font-medium font-['Rubik'] underline leading-[18px]">
                        Terms of Service
                      </span>
                      <span style="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                        .
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-[17px] bg-lime-300 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
                  <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                    Continue to shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[630px] h-[0px] border border-gray-200"></div>
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="text-center text-blue-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                Refund policy
              </div>
              <div className="text-center text-blue-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                Shipping policy
              </div>
              <div className="text-center text-blue-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                Privacy policy
              </div>
              <div className="text-center text-blue-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                Terms of service
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[605px] self-stretch pl-6 pr-[135px] py-20 bg-slate-50 justify-start items-start gap-2.5 inline-flex">
        <div className="flex-col justify-start items-start gap-[50px] inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[446px] h-[76px] relative">
              <div className="w-[76px] h-[76px] left-0 top-0 absolute">
                <div className="w-[72px] h-[72px] p-4 left-0 top-[4px] absolute bg-white rounded-2xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="w-10 h-10 rounded-lg"
                    src="https://via.placeholder.com/40x40"
                  />
                </div>
                <div className="w-5 h-[22px] left-[56px] top-0 absolute">
                  <div className="w-5 h-5 left-0 top-[1px] absolute bg-slate-500 rounded-full" />
                  <div className="left-[6px] top-0 absolute text-zinc-100 text-base font-medium font-['Rubik'] leading-snug">
                    1
                  </div>
                </div>
              </div>
              <div className="w-[354px] h-[52px] left-[92px] top-[14px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="w-[247px] text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                    Sopa Everyday Mask
                  </div>
                  <div className="w-[103px] text-right text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                    $12.00
                  </div>
                </div>
                <div className="w-[268px] text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                  Black /Extra Extra Small
                </div>
              </div>
            </div>
            <div className="w-[446px] h-[0px] border border-gray-200"></div>
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="h-14 px-5 py-[17px] bg-white rounded-lg border border-gray-200 justify-start items-start gap-2.5 flex">
                <div className="text-center text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                  Gift card or discount code
                </div>
              </div>
              <div className="h-14 px-6 py-[17px] bg-lime-300 rounded-[32px] justify-center items-start gap-2.5 flex">
                <div className="w-[133px] text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                  Apply
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="w-[445px] text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
              Get 10-15% off for making a better tomorrow
            </div>
            <div className="h-14 px-5 bg-green-400 rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="w-14 h-[0px] origin-top-left rotate-90 border border-white"></div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-white text-sm font-normal font-['Rubik'] leading-[18px]">
                    Verify with
                  </div>
                  <div className="text-white text-[28px] font-bold font-['Noto Serif Lao'] leading-loose">
                    ID.me
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="w-[418px] text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                Verification by ID. What is ID.me?
              </div>
            </div>
            <div className="w-[446px] h-[0px] border border-gray-200"></div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="w-[339px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Subtotal
                </div>
                <div className="w-[103px] text-right text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  $12.00
                </div>
              </div>
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="w-[248px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Shipping ?
                </div>
                <div className="text-right text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Calculated at next step
                </div>
              </div>
            </div>
            <div className="w-[446px] h-[0px] border border-gray-200"></div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-[266px] text-slate-950 text-2xl font-bold font-['Noto Serif Lao'] leading-7">
                Total
              </div>
              <div className="w-44 text-right">
                <span style="text-slate-500 text-lg font-normal font-['Rubik'] leading-snug">
                  usd
                </span>
                <span style="text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  {" "}
                </span>
                <span style="text-slate-950 text-2xl font-bold font-['Noto Serif Lao'] leading-7">
                  $12.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage