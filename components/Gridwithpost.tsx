import React from "react";

const GridWithImages: React.FC = () => {
  return (

<div className="grid grid-cols-3 gap-4 p-4">

   {/* Grid Item 1 */}


   <div className="  col-span-3 " > 
      <h6 className=" text-center text-[12px] leading-[24px] text-[#23A6F0] font-bold-700"> Practise Advise </h6>
      <h1 className="font-bold text-center text-[40px] text-black"> Featured Posts  </h1>
      <p className="text-center"> Problems trying to resolve the conflict between the two major realms of classical physics. Newton's Mechanics </p>
       </div>
  
  <div className=" shadow-md">
   
    <div className="h-[300px] bg-gray-100">
      <img
        src="/images/post1.png"
        alt="Product Image"
        className="h-full w-full rounded-t-lg"
      />
    </div>


    <div className="p-4 h-[300px]">
    <div className="flex px-0">
    <p className="text-[12px] text-[#8EC2F2] px-2">Google </p>
    <p className="text-[12px] text-[#737373] px-2">Trending </p>
    <p className="text-[12px] text-[#737373] px-2">New</p>
   </div>
      <h4 className="text-[20px] font-bold-400 px-0 p-4">Loudest à la Madison #1 
      (L'integral)</h4>
      <p className="text-[#737373] text-[14px] ">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className="flex pt-4 justify-between">

<button className=" text-[#737373]">
<i className="fas fa-calendar-alt mr-2"></i>
22 April 2021 
</button>

<button className="text-[#737373] ">
<i className=" fas fa-comments mr-2"></i>
10 Comments
</button>
    </div>
    
      <h6 className="text-[14px] pt-10 font-bold text-[#737373]">Learn More </h6>
    </div>
  </div>

  <div className=" shadow-md">
   
   <div className="h-[300px] bg-gray-100">
     <img
       src="/images/post2.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>


   <div className="p-4 h-[300px]">
   <div className="flex ml-0 my-0">
    <p className="text-[12px] text-[#8EC2F2] px-2">Google </p>
    <p className="text-[12px] text-[#737373] px-2">Trending </p>
    <p className="text-[12px] text-[#737373] px-2">New</p>
   </div>
      <h4 className="text-[20px] font-bold-400 px-0 p-4">Loudest à la Madison #1 
      (L'integral)</h4>
      <p className="text-[#737373] text-[14px] ">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      
      <div className="flex pt-4 justify-between">

  <button className=" text-[#737373]">
  <i className="fas fa-calendar-alt mr-2"></i>
  22 April 2021 
</button>

<button className="text-[#737373] ">
  <i className=" fas fa-comments mr-2"></i>
  10 Comments
</button>
      </div>
      <h6 className="text-[14px] pt-10 font-bold text-[#737373]">Learn More </h6>
    </div>
  </div>

 <div className=" shadow-md">
   
   <div className="h-[300px] bg-gray-100">
     <img
       src="/images/post3.png"
       alt="Product Image"
       className="h-full w-full rounded-t-lg"
     />
   </div>

   <div className="p-4 h-[300px]">
    <div className="flex ml-0 my-0">
    <p className="text-[12px] text-[#8EC2F2] px-2">Google </p>
    <p className="text-[12px] text-[#737373] px-2">Trending </p>
    <p className="text-[12px] text-[#737373] px-2">New</p>
   </div>
      <h4 className="text-[20px] font-bold-400 px-0 p-4">Loudest à la Madison #1 
      (L'integral)</h4>
      <p className="text-[#737373] text-[14px] ">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
    
  <div className="flex pt-4 justify-between">

  <button className=" text-[#737373]">
  <i className="fas fa-calendar-alt mr-2"></i>
  22 April 2021 
</button>

<button className="text-[#737373] ">
  <i className=" fas fa-comments mr-2"></i>
  10 Comments
</button>
      </div>
      <h6 className="text-[14px] pt-10 font-bold text-[#737373]">Learn More </h6>
    </div>
  </div>

 

 
  
</div>
  );
};

export default GridWithImages;