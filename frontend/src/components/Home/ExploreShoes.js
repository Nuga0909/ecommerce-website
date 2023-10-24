import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  startFetchingProducts,
  productsFetched,
  productsFetchError,
} from "../../state/red.js";

function ExploreShoes() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(startFetchingProducts());

    axios
      .get("http://localhost:3000/products/all")
      .then((response) => {
        dispatch(productsFetched(response.data.data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(productsFetchError(error.message));
      });
  }, [dispatch]);

  return (
    <div className="w-[1440px] h-[1346px] px-[135px] py-20 bg-white justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-8 inline-flex">
        <div className="justify-start items-center gap-[700px] inline-flex">
          <div className="w-[370px] text-slate-950 text-[28px] font-bold font-['Noto Serif'] leading-loose">
            Explore Model 000
          </div>
          <div className="w-[100px] text-right text-slate-950 text-base font-normal font-['Rubik'] underline leading-snug">
            Shop Now
          </div>
        </div>
        {Array(2)
          .fill(0)
          .map((_, rowIndex) => (
            <div
              className="flex-col justify-start items-start gap-[30px] flex"
              key={rowIndex}
            >
              <div className="justify-start items-start gap-[30px] inline-flex">
                {products
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((product, idx) => (
                    <div className="justify-start items-start flex" key={idx}>
                      <div className="px-6 pt-20 pb-6 bg-zinc-100 rounded-2xl justify-start items-start gap-2.5 flex">
                        <div className="flex-col justify-start items-start gap-20 inline-flex">
                          <img
                            className="w-[322px] h-[270px] mix-blend-darken rounded-2xl"
                            src={`http://localhost:3000/uploads/${product.imageName}`}
                            alt={product.productName}
                          />
                          <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="w-[322px] text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
                              {product.productName}
                            </div>
                            <div className="justify-start items-start gap-4 inline-flex">
                              <div className="w-[243px] text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                                {product.description}
                              </div>
                              <div className="w-[63px] text-right text-slate-500 text-sm font-normal font-['Rubik'] leading-[18px]">
                                ${product.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        <div className="px-6 py-[17px] bg-lime-300 rounded-[32px] justify-center items-start gap-2.5 inline-flex">
          <div className="w-[133px] text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreShoes;
