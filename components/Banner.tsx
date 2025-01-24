import React from "react";

const Banner: React.FC = () => {
  return (
    <div 
      className=" relative bg-cover bg-centre h-[900px] flex  justify-right items-center"
      style={{ 
        backgroundImage: 
        `url('https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ktUNFZRQ9Nnn2KHZykIee7ROPrB4yvVj2ZaILbfSva2KtRE-6kd9WaZeD5LtbB5Xl3U6Dz7rfZO~288FDEZwy7kSdLr6ms2J3SvFE6UM-NcacqfuvfhXRf5~cmOEAyPp~vLql88F-ZLYB6xfGpP9xHkE7fHYRKdWXdhsd79m9YarQMZuB3svjxnN0jP4yUf3bQ~O4zCy-zq2BgFd3vajTBgESz6DTBLbaB5FC-JwwBDdht6AK01KB9LBMNsbLK63qR5S2FdYqOO2uZqM0QAle3BjFoiVdfBn583wnscedl8xcAVwi7aPJ2QFlfoTJwWxW0XJtNzuhzt5HrWoml7B8Q__` 
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
      
        <button className="bg-green-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;