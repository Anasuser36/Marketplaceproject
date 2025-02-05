import React from "react";
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <div 
      className=" relative bg-cover bg-centre h-[900px] flex  justify-right items-center"
      style={{ 
        backgroundImage: 
        `url('https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umf1BuJahrvlxgSAIPEhjk1Maqpb1NOGGxTkyXAPZnpV72zl3FQNQjgt6OL9xTcZtZUgAAP1p5WPKkAuh1jV5~t2Cy9TJozMTgtWl4-osIgNoeDboRlA5FeUV1-F5-ztJL54IdTgpkXJR~L2Qsg23YKeFk6WvIkVm8hlHCgy3O1rdkmUUHijDCz5Gw24O9IDUEvCWJzSKpuyG~v7sf6GfaRSnaWEw45mwrGuZsxgpzyE7obIuoIlY1geBqJOhrTO6mlWh~E8BCmhVXAxMBq2ShHv7UWEC2HO3mMSNc6EuBw3K6LDzqmvOeCucH9-QFdtZYAXmIJEmQqZzLpItzHFKw_` 
        //`url('/images/mainbanner.jpg` } 
      } 
    } // Replace with your image path

    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

      {/* Content */}
      <div className="relative z-10  px-10    text-white">
      <h5 className="py-8">
        Summer 2025
        </h5>

        <h1 className=" font-bold text-5xl py-4 ">
          New Collection
        </h1>

        <p className="text-[16px] px-1 py-3 text-white">
        We know how large objects will act,but things on a small scale.
      </p>
      
        
        <Link  href={`/AllProducts`}
        className="bg-green-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;