import React from "react";

const GridWithImages: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {/* Grid Item 1 */}

      <div className="  col-span-3 " > 
      <h6 className=" text-center text-[12px] leading-[24px] text-[#23A6F0] font-bold-700"> Practise Advise </h6>
      <h1 className="font-bold text-center text-[40px] text-black"> Featured Posts  </h1>
      <p className="text-center"> Problems trying to resolve the conflict between the two major realms of classical physics. Newton's Mechanics </p>
       </div>

      <div
        className="h-64 bg-cover bg-center   shadow-md"
        style={{ backgroundImage: `url('/images/post1.png')` }} // Replace with your image path
      >
        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

      {/* Grid Item 2 */}
      <div
        className="h-64  bg-cover bg-center  shadow-md"
        style={{ backgroundImage: `url('/images/post2.png')` }}
      >
        <div className="bg-black bg-opacity-40 row-span-2 h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

      {/* Grid Item 3 */}
      <div
        className="h-64 bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url('/images/post3.png')` }}
      >
        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>
     
    </div>
  );
};

export default GridWithImages;