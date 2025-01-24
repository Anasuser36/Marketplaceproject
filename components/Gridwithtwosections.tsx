import React from "react";

const GridWithImages: React.FC = () => {
  return (

<div className="grid grid-cols-4 gap-4 p-4">

   {/* Grid Item 1 */}

 <div className="  col-span-4" > 
      <h1 className=" text-center text-black font-bold-400"> Featured products  </h1>
      <h1 className="font-bold text-[24px] text-center"> Best Sellers Products  </h1>
      <p className="text-center"> Problems trying to resolve the conflict between </p>
       </div>
  
  <div className=" shadow-md">
   
    <div className="h-[427px] bg-gray-100">
      <img
        src="/images/item1.png"
        alt="Product Image"
        className="h-full w-full rounded-t-lg"
      />
    </div>


    <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
  </div>

  <div className=" shadow-md">
   
   <div className="h-[427px] bg-gray-100">
     <img
       src="/images/item2.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>


   <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
 </div>

 <div className=" shadow-md">
   
   <div className="h-[427px] bg-gray-100">
     <img
       src="/images/item3.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>

   <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
 </div>

 <div className="shadow-md">
   
   <div className="h-[427px] bg-gray-100">
     <img
       src="/images/item4.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>


   <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
 </div>

 <div className="shadow-md">
   
   <div className="h-[427px] bg-gray-100">
     <img
       src="/images/item5.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>


   <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
 </div>

  <div className="shadow-md">
   
    <div className="h-[427px] bg-gray-100">
      <img
        src="/images/item6.png"
        alt="Product Image"
        className="h-full w-full rounded-t-lg"
      />
    </div>


    <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
  </div>

  <div className="shadow-md">
   
   <div className="h-[427px] bg-gray-100">
     <img
       src="/images/item7.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>


   <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
 </div>

  <div className="shadow-md">
    <div className="h-[427px] bg-gray-100">
      <img
        src="/images/item8.png"
        alt="Product Image"
        className="h-full w-full  rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <h5 className="text-lg font-bold">Graphic design</h5>
      <p className="text-gray-500 text-sm">English Department</p>
      <p className="text-gray-700 font-semibold">$16.48 $6.48</p>
      <p className="text-sm text-gray-500">Blue</p>
    </div>
  </div>
</div>
  );
};

export default GridWithImages;