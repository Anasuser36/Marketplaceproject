import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    
    <footer className="bg-[#FAFAFA] py-4">
       <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <Link href="/">Bandage</Link>

        </div>

        <div className="flex space-x-4">
      {/* Facebook Icon */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 text-blue-600 hover:text-blue-800" />
      </a>

      {/* Instagram Icon */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-pink-500 hover:text-pink-700" />
      </a>

      {/* Twitter Icon */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-blue-400 hover:text-blue-600" />
      </a>
    </div>

</div>

 
      
     
    </footer>

    
  );
};

export default Footer;