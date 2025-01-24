import React from "react";

const Banner: React.FC = () => {
  return (
     
    <div className="flex justify-between items-center h-screen">

      <div className="w-1/2 ">
      <div className="w-[502px] h-[465px]  ">
      <img  src="/images/sidesectionimage.png" />
      </div>
      </div>

      <div className="w-[573px] h-[326px] mx-12">
      <div className="flex flex-col gap-6">
      <h5 className="text-[#BDBDBD] py-8" >Summer 2025 </h5>
      <h1 className="font-bold-700 text-[54px]">Part of the Neural Universe</h1>
      <h4 className="text-[20px] text-[#737373]">
        We know how large objects will act,but things on a small scale.
      </h4>
      <div className="flex gap-6 w-[339px] h-[52px]">
      <button className="bg-[#2DC071] text-white w-[156px] h-[52px] ">
        Buy Now
      </button>
      <button className="border-2 bg-white text-red  w-[156px] h-[52px]">
        Read More
      </button>
      </div>
    </div>
      </div>

     
    </div>
  );
};

export default Banner;