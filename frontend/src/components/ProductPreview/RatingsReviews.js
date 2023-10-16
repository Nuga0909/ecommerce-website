import React from "react";
import star from "../../assets/star.svg";

function RatingsReviews() {
  return (
    <div className="w-[1440px] h-[1818px] px-[135px] py-20 bg-white justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className="w-[770px] text-center text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
            Ratings and Reviews
          </div>
          <div className="w-[770px] text-center text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
            An overwhelming 97% of reviewers have endorsed this product, <br />
            recommending it wholeheartedly to their friends and family.
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-8 flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-center gap-[30px] inline-flex">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="text-center text-slate-950 text-[56px] font-bold font-['Noto Serif Lao'] leading-[64px]">
                  4.7
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
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
                <div className="w-[270px] text-center text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                  Based on 3,205 reviews
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[70px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Fit
                </div>
                <div className="justify-start items-center inline-flex">
                  <div className="w-8 h-[0px] origin-top-left rotate-90 border border-neutral-300"></div>
                  <div className="w-[869px] h-5 relative">
                    <div className="w-[869px] h-[0px] left-0 top-[10px] absolute border border-neutral-300"></div>
                    <div className="w-5 h-5 left-[729px] top-0 absolute bg-slate-950 rounded-full" />
                  </div>
                  <div className="w-8 h-[0px] origin-top-left rotate-90 border border-neutral-300"></div>
                </div>
                <div className="justify-start items-start gap-[730px] inline-flex">
                  <div className="w-[70px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                    Poor
                  </div>
                  <div className="w-[70px] text-right text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                    Perfect
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1170px] h-[0px] border border-neutral-300"></div>
          </div>
          <div className="justify-start items-start gap-[788px] inline-flex">
            <div className="px-8 py-4 bg-slate-50 rounded border border-gray-200 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-center text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Filters
                </div>
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-50 rounded border border-gray-200 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-center text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Write a Review
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-center gap-[765px] inline-flex">
              <div className="w-[170px] text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                3,205 reviews
              </div>
              <div className="justify-start items-center gap-6 flex">
                <div className="text-slate-950 text-lg font-semibold font-['Rubik'] leading-snug">
                  Sort
                </div>
                <div className="text-slate-950 text-lg font-normal font-['Rubik'] leading-snug">
                  Highest Rating
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="py-6 bg-white border-t border-b border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="px-5 pt-6 pb-10 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                          Alicia
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                            Verified Reviewer
                          </div>
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-slate-500 rounded-full" />
                            <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="w-[260px] text-slate-950 text-base font-medium font-['Rubik'] leading-snug">
                          Reviewing
                        </div>
                        <div className="w-[260px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                          Model 000: Gray
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                          I recommend this product
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[49px] inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <div className="justify-start items-start gap-[350px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
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
                          <div className="w-[346px] text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                            Super Comfy And Holding Up Nicely
                          </div>
                        </div>
                        <div className="w-[150px] text-right text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                          3 months ago
                        </div>
                      </div>
                      <div className="w-[746px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        These shoes are my go-to for comfort and durability as a
                        busy teacher and devoted mom of two young children. I
                        wear them to work nearly every day and they still hold
                        up incredibly well, earning a glowing 5-star review
                        despite a stubborn coffee stain.
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Was this helpful?
                      </div>
                      <div className="justify-start items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            3
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative origin-top-left -rotate-180" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 bg-white border-t border-b border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="px-5 pt-6 pb-10 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                          Hardik{" "}
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                            Verified Reviewer
                          </div>
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-slate-500 rounded-full" />
                            <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="w-[260px] text-slate-950 text-base font-medium font-['Rubik'] leading-snug">
                          Reviewing
                        </div>
                        <div className="w-[260px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                          Model 000: Gray
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                          I recommend this product
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[49px] inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <div className="justify-start items-start gap-[350px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
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
                          <div className="w-[346px] text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                            Love From Ikeja
                          </div>
                        </div>
                        <div className="w-[150px] text-right text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                          4 months ago
                        </div>
                      </div>
                      <div className="w-[746px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        I opted for the Gray color and I am absolutely in love
                        with it! This amazing brand and its supportive community
                        have exceeded my expectations. It is no surprise that
                        this review has been helpful to 3 people who voted 'yes'
                        - I highly recommend giving this product a try!
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Was this helpful?
                      </div>
                      <div className="justify-start items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            10
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative origin-top-left -rotate-180" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 bg-white border-t border-b border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="px-5 pt-6 pb-10 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                          Hardik{" "}
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                            Verified Reviewer
                          </div>
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-slate-500 rounded-full" />
                            <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="w-[260px] text-slate-950 text-base font-medium font-['Rubik'] leading-snug">
                          Reviewing
                        </div>
                        <div className="w-[260px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                          Model 000: Gray
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                          I recommend this product
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[49px] inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <div className="justify-start items-start gap-[350px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
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
                          <div className="w-[346px] text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                            Love From Yaba
                          </div>
                        </div>
                        <div className="w-[150px] text-right text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                          4 months ago
                        </div>
                      </div>
                      <div className="w-[746px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        I opted for the Gray color and I am absolutely in love
                        with it! This amazing brand and its supportive community
                        have exceeded my expectations. It is no surprise that
                        this review has been helpful to 3 people who voted 'yes'
                        - I highly recommend giving this product a try!
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Was this helpful?
                      </div>
                      <div className="justify-start items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            10
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative origin-top-left -rotate-180" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 bg-white border-t border-b border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="px-5 pt-6 pb-10 bg-zinc-100 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                          Hardik{" "}
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                            Verified Reviewer
                          </div>
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-slate-500 rounded-full" />
                            <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="w-[260px] text-slate-950 text-base font-medium font-['Rubik'] leading-snug">
                          Reviewing
                        </div>
                        <div className="w-[260px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                          Model 000: Gray
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-slate-950 text-sm font-normal font-['Rubik'] leading-[18px]">
                          I recommend this product
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[49px] inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <div className="justify-start items-start gap-[350px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
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
                          <div className="w-[346px] text-slate-950 text-lg font-medium font-['Rubik'] leading-snug">
                            Love From Bariga
                          </div>
                        </div>
                        <div className="w-[150px] text-right text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                          4 months ago
                        </div>
                      </div>
                      <div className="w-[746px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                        I opted for the Gray color and I am absolutely in love
                        with it! This amazing brand and its supportive community
                        have exceeded my expectations. It is no surprise that
                        this review has been helpful to 3 people who voted 'yes'
                        - I highly recommend giving this product a try!
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-500 text-base font-normal font-['Rubik'] leading-snug">
                        Was this helpful?
                      </div>
                      <div className="justify-start items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            10
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-5 h-5 relative origin-top-left -rotate-180" />
                          <div className="text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
            <div className="w-[133px] text-center text-white text-base font-normal font-['Rubik'] leading-snug">
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingsReviews;
