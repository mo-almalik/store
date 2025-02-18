import React from "react";

import { Image, Skeleton } from "antd";
import { TbEye, TbHeart, TbShoppingBag } from "react-icons/tb";
import currency from "currency.js";

function Products({data,isLoading,isError, error,language,limit=15,addToCart}) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const formatPrice = (price) => {
    return currency(price, { symbol: "SAR ", precision: 0 }).format();
  };
  if (isLoading) {
    return (
      <div>
        <Skeleton active={true} avatar={true} />
      </div>
    );
  }
  if (isError) {
    return <div>{error?.message}</div>;
  }



  return (
    <>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {data?.slice(0,limit).map((el) => {
            const imageUrl = `${baseUrl}/${el.coverImage}`;
            return (
              <div
                key={el._id}
                className="border border-gray-100 rounded-2xl p-2 relative group overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={el.title[language]}
                  height={250}
                  width={"100%"}
                  className="rounded-xl object-cover"
                  preview={false}
                />

                <div className="px-2 py-3 flex  items-center justify-between">
                  <h3>{el.title[language]}</h3>

                  {/* price */}
                  <div className="flex items-center gap-x-1">
                    {el.priceAfterDiscount ? (
                      <>
                        <span className="text-red-500 line-through text-sm absolute top-4 bg-light p-1 px-2 rounded-full  rtl:left-4 ltr:right-4">
                          {formatPrice(el.price)}
                        </span>
                        <h3 className="text-md ltr:text-sm font-bold text-main  ">
                          {formatPrice(el.priceAfterDiscount)}
                        </h3>
                      </>
                    ) : (
                      <h3 className="text-md ltr:text-sm font-bold text-gray-800">
                        {formatPrice(el.price)}
                      </h3>
                    )}
                  </div>
                </div>

                {/* hover icons */}
                <div className="absolute top-4 rtl:right-4 ltr:left-4 bg-light/60 p-2 py-4 rounded-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex flex-col gap-4">
                    <div>
                      <TbHeart className="text-gray-800 size-6 cursor-pointer" />
                    </div>
                    <div onClick={() => addToCart(el._id)}>
                      <TbShoppingBag className="text-gray-800 size-6 cursor-pointer" />
                    </div>
                    <div>
                      <TbEye className="text-gray-800 size-6 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
    </>
  );
}

export default Products;
