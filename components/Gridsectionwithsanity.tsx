import React from "react";

const GridWithImages: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] grid grid-cols-4 gap-4 p-4">

      {/* Grid Item 1 */}

      <div className="col-span-4" > 
      <h1 className="font-bold text-[24px] text-center"> EDITOR'S PICK </h1>
      <p className="text-center"> Problems trying to resolve the conflict between </p>
       </div>


      <div
        className="h-[500px]  col-span-2 bg-no-repeat  object-cover bg-center row-span-2  "
        style={{ backgroundImage: `url('/images/media bg-cover.png')` }} // Replace with your image path
      >
        <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[426px] ml-32 px-10">
          <h3 className="text-text  text-2xl font-bold">Men</h3>
        </div>
      </div>

      {/* Grid Item 2 */}
      <div
        className="h-[500px] col-span-1 row-span-2 bg-cover bg-center  shadow-md"
        style={{ backgroundImage: `url('/images/griditemsecond.png')` }}
      >
       <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[426px] ml-28 px-10">
          <h3 className="text-black text-2xl font-bold">Women</h3>
        </div>
      </div>

      {/* Grid Item 3 */}
      <div
        className="h-[240px] col-span-1  bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url('/images/griditemthird.png')` }}
      >
       <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[171px] ml-10 px-8">
          <h3 className="text-black text-2xl font-bold">Accesories</h3>
        </div>
      </div>

      {/* Grid Item 4 */}
      <div
        className="h-[240px] col-span-1 bg-cover bg-center  shadow-md"
        style={{ backgroundImage: `url('/images/griditemfour.png')` }}
      >
        <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[176px] ml-10 px-10">
          <h3 className="text-black text-2xl font-bold">Kids</h3>
        </div>
      </div>

     
    </div>
  );
};

export default GridWithImages;