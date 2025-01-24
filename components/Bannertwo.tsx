import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-screen bg-[#23856D]">

     

      <div className="h-[509px] w-[422px] mx-12">
      <div className="flex flex-col gap-6">
      <h5 className="text-white py-8" >
        Summer 2025
        </h5>
      <h1 className="font-bold text-white text-[58px]">Vita Classic Product</h1>
      <p className="text-[14px] font-bold-400 text-white">
        We know how large objects will act,but things on a small scale.
      </p>
      <div className="flex h-[52px] w-[295px] gap-6">
      <h5 className=" text-white text-[24px]  ">
        $16.48
      </h5>
      <button className="border-2 bg-[#2DC071] text-red w-[184px] h-[52px] ">
        Add to Cart
      </button>
      </div>
    </div>
      </div>

      <div className="w-1/2 ">
      <div className="  ">
      <img  src="/images/hero1.png" />
      </div>
      </div>
     
    </div>
  );
};

export default Banner;