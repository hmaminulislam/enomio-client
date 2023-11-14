import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/product-card/ProductCard';
import Spinner from '../../common/spinner/Spinner';
import './categories.css'

const Categories = () => {
    const [cate, setCate] = useState('men')
    const [products, setProducts] = useState()
    useEffect(() => {
        const url = `https://enomio-server.vercel.app/category/${cate}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [cate])
    return (
      <div className="my-20 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <div className="">
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => setCate("men")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "men" ? "bg-primary text-white" : ""
              }`}
            >
              Men
            </button>
            <button
              onClick={() => setCate("women")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "women" ? "bg-primary text-white" : ""
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setCate("tshirt")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "tshirt" ? "bg-primary text-white" : ""
              }`}
            >
              T-shirt
            </button>
            <button
              onClick={() => setCate("laptop")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "laptop" ? "bg-primary text-white" : ""
              }`}
            >
              Laptop
            </button>
            <button
              onClick={() => setCate("bag")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "bag" ? "bg-primary text-white" : ""
              }`}
            >
              Bag
            </button>
            <button
              onClick={() => setCate("jacket")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "jacket" ? "bg-primary text-white" : ""
              }`}
            >
              Jacket
            </button>
            <button
              onClick={() => setCate("pant")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "pant" ? "bg-primary text-white" : ""
              }`}
            >
              Pant
            </button>
            <button
              onClick={() => setCate("shoes")}
              className={`sm:px-8 px-6 sm:py-3 py-2 text-sm sm:text-base border-[1px] border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:border-white transition duration-500 ${
                cate === "shoes" ? "bg-primary text-white" : ""
              }`}
            >
              Shoes
            </button>
          </div>
        </div>
        <div className="categories-products mt-10 sm:mt-12">
          {products ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20">
                <ProductCard products={products && products} />
              </div>
            </>
          ) : (
            <Spinner height={"h-60"} />
          )}
        </div>
      </div>
    );
};

export default Categories;