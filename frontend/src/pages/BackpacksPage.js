import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  startFetchingProducts,
  productsFetched,
  productsFetchError,
  selectProduct,
} from "../state/red.js";
import { useNavigate } from "react-router-dom";

function BackpacksPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.cart.products.filter((product) => product.category === "Bags")
  );
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

  const handleCardClick = (product) => {
    dispatch(selectProduct(product));
    navigate("/product-preview", { state: { product } });
  };
  return (
    <div className="w-[1440px] px-[135px] py-20 bg-white justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-8 inline-flex">
        <div className="justify-start items-center gap-[700px] inline-flex">
          <div className="w-[370px] text-slate-950 text-[28px] font-bold font-['Noto Serif'] leading-loose">
            Backpacks
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
                    <div
                      className="justify-start items-start flex relative"
                      key={idx}
                      onClick={() => handleCardClick(product)}
                    >
                      <div className="px-6 pt-20 pb-6 bg-zinc-100 rounded-2xl justify-start items-start gap-2.5 flex hover:bg-yellow-100">
                        <div className="flex-col justify-start items-start gap-20 inline-flex">
                          <img
                            className="w-full h-auto object-cover rounded-2xl" // ensures images are not distorted
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
      </div>
    </div>
  );
}

export default BackpacksPage;
