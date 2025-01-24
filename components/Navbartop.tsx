import React from "react";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Select the weights you need
});

const Header: React.FC = () => {
  return (
    
    <header className="{montserrat.className}">
       <div className="bg-black   mx-auto flex items-center justify-between px-10 ml-0">
        {/* Logo */}
        
  <button className="flex items-center  text-white px-4 py-2">
  <i className=" fas fa-phone mr-2"></i>
  (225) 555-0118
</button>
     
  <button className="flex items-center  text-white px-4 py-2 ">
  <i className="fas fa-envelope mr-2"></i>
  michelle.rivera@example.com
</button>
     
       
   {/* Follow us */}
        <div className="text-white ">
          <Link href="/">Follow us and get a chance to win 80% off </Link>
        </div>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-6">

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

      
     
    </header>

    
  );
};

export default Header;