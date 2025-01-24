import React from "react";

const GridWithImages: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Grid Item 1 */}

      
      <div className="  col-span-3 " > 
      <h6 className=" text-center text-[12px] leading-[24px] text-[#23A6F0] font-bold-700"> Practise Advise </h6>
      <h1 className="font-bold text-center text-[40px] text-black"> Featured Posts  </h1>
      <p className="text-center"> Problems trying to resolve the conflict between the two major realms of classical physics. Newton's Mechanics </p>
       </div>


      <div
        className="bg-center h-[427px] bg-no-repeat "
        style={{ backgroundImage: `url('/images/item1.png')` }} // Replace with your image path
      >
        <div className=" h-[188px] flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

      {/* Grid Item 2 */}
      <div
        className="h-[427px] bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item2.png')` }}
      >
        <div className=" row-span-2 h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

      {/* Grid Item 3 */}
      <div
        className="h-[427px]  bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item3.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

      {/* Grid Item 4 */}
      <div
        className="h-[427px]  bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item4.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

         {/* Grid Item 5 */}
         <div
        className="h-[427px]  bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item5.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

         {/* Grid Item 6 */}
         <div
        className="h-[427px] bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item6.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

         {/* Grid Item 7 */}
         <div
        className="h-[427px]  bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/item7.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

         {/* Grid Item 8 */}
         <div
        className= " h-[427px]  bg-center bg-no-repeat ]"
        style={{ backgroundImage: `url('/images/item8.png')` }}
      >
        <div className=" h-full flex items-center justify-center rounded-lg">
          <h3 className="text-white text-2xl font-bold"></h3>
        </div>
      </div>

     
    </div>
  );
};

export default GridWithImages;