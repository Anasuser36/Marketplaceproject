import React from "react";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';


const GridWithImages: React.FC = () => {
  return (

   
    <div className="grid grid-cols-3  bg-black items-center ">
      {/* Grid Item 1 */}

      
 <div className="bg-black  flex ">
         
  <button className="flex items-center  text-white px-4 py-2">
  <i className=" fas fa-phone mr-2"></i>
  (225) 555-0118
</button>
     
  <button className="flex items-center  text-white px-4 py-2 ">
  <i className="fas fa-envelope mr-2"></i>
  michelle.rivera@example.com
</button>
        </div>
  

      {/* Grid Item 2 */}
     
          {/* Follow us */}
          <div className="text-white px-10">
          <Link href="/">Follow us and get a chance to win 80% off </Link>
        </div>

   

      {/* Grid Item 3 */}
     
         {/* Icons and Buttons */}
         <div className="flex items-center px-10 space-x-6">

{/* Register and Login Buttons */}
<Link href={""} className="text-white py-2 ">
 Follow Us :
</Link>

{/* Search Icon */}
<img src="/images/instaicon.png"></img>

{/* Wishlist Icon */}
<img src="/images/youtubeicon.png"></img>


{/* Cart Icon */}
<img src="/images/fbicon.png"></img>

  {/* Cart Icon */}
  <img src="/images/twitericon.png"></img>




      </div>

     

     
    </div>
  
    
  );
};

export default GridWithImages;