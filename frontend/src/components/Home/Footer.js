import React from "react";
import logo from "../../assets/cover.png";
import fb from "../../assets/facebook.jpg";
import insta from "../../assets/instagram.jpg";
import twit from "../../assets/twitter.jpg";

function Footer() {
  return (
    <div className="w-[1440px] h-[482px] px-[135px] py-20 bg-slate-950 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-[30px] inline-flex">
        <div className="flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[180px] h-[68px] py-[16.32px] justify-center items-center inline-flex">
            <div className="w-[180px] h-[65.36px] relative">
              <div className="w-[12rem] h-[33.32px] left-0 top-[2.04px] absolute">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="w-[370px] text-white text-base font-normal font-['Rubik'] leading-snug">
              Stay informed about Ooja with our latest <br />
              releases and founder news.
            </div>
            <div className="w-80 px-6 py-3 rounded-[32px] border border-white justify-center items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                Enter email here for updates
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end items-center gap-[30px] flex">
          <div className="justify-start items-start gap-[30px] flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[170px] text-white text-xl font-medium font-['Rubik'] leading-normal">
                Products
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Model 000
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Model 001
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Laces
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Masks
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  No-show Socks
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Crew Socks
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Gift Cards
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[170px] text-white text-xl font-medium font-['Rubik'] leading-normal">
                Support
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Help Center
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  FAQs
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Order
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Order Status
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Returns & Exchanges
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Contact Us
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[170px] text-white text-xl font-medium font-['Rubik'] leading-normal">
                Everything Else
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Community
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Why Ooja
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  About{" "}
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Discount Program
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Ooja Blog
                </div>
                <div className="w-[170px] text-white text-base font-normal font-['Rubik'] leading-snug">
                  Ooja Ambassadors
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-6 h-6 relative">
                <img src={twit} alt="" />
              </div>
              <div className="w-[134px] text-white text-base font-normal font-['Rubik'] leading-snug">
                Twitter
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-6 h-6 relative">
                <img src={insta} alt="" />
              </div>
              <div className="w-[134px] text-white text-base font-normal font-['Rubik'] leading-snug">
                Instagram
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-6 h-6 relative">
                <img src={fb} alt="" />
              </div>
              <div className="w-[134px] text-white text-base font-normal font-['Rubik'] leading-snug">
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
