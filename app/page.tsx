import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import Gridsection from "@/components/Gridsection";
import Gridsectiontwo from "@/components/Gridsectiontwo";
import Bannerone from "@/components/Bannerone";
import Bannertwo from "@/components/Bannertwo";
import Gridwithpost from "@/components/Gridwithpost";
import GridWithImages from "@/components/Practise";
import Gridwithtwosections from "@/components/Gridwithtwosections";
import Gridsectiontwosanity from "@/components/Gridsectiontwosanity";

export  default  function Home() {
  return (
     
   
    <div>
    <Banner/>
    <Gridsection/>
    <Gridsectiontwosanity/>
    <Bannertwo/>
    <Bannerone/>
    <Gridwithpost/>


    </div>

    
  );
}

export function Hometwo() {
  return ( 

    
    <div className="grid grid-cols-3  grid-row-3 gap-3">
    <div className="  col-span-3" > 
      <h1 className="font-bold text-center"> EDITOR'S PICK </h1>
      <p className="text-center"> Problems trying to resolve the conflict between </p>
       </div>
   
    <div className="bg-blue-400 row-span-2 h-20 " >
    <img src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMhj20UPOtL0GXrPAoLFuTehUdt2D9XqtRmkxLWGZbuUPl7d1FbIHlk7MJWtLngQhy629iT-kGgRI9ksLmjLgVtUpjgWpordbc31Z2Aj8G2fsER4btUuEP3xFf6wNiy8GHHbrUpXczWV2dYy-BUk9rF7aUw3bVbgi0wUmEg4yD4GwTW23fovDTNAYg-s~hllb~DvsUDb6PhsGbg1k-vb99VTz3ve7lfMEQUeRMg7SYDqVJjbzaLm3E2FUz8LPRczoAIyMGb52jLS~lfuiNhnKMB7o4JNo-YUrMAtxpWAVxedQzxUidLovv0-gujaJ7QJk0cwJsBFITSBtDK9p0kRJA" ></img>
    </div>
    <div className="bg-green-400  row-span-2 h-20 " > 
    <img src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMhj20UPOtL0GXrPAoLFuTehUdt2D9XqtRmkxLWGZbuUPl7d1FbIHlk7MJWtLngQhy629iT-kGgRI9ksLmjLgVtUpjgWpordbc31Z2Aj8G2fsER4btUuEP3xFf6wNiy8GHHbrUpXczWV2dYy-BUk9rF7aUw3bVbgi0wUmEg4yD4GwTW23fovDTNAYg-s~hllb~DvsUDb6PhsGbg1k-vb99VTz3ve7lfMEQUeRMg7SYDqVJjbzaLm3E2FUz8LPRczoAIyMGb52jLS~lfuiNhnKMB7o4JNo-YUrMAtxpWAVxedQzxUidLovv0-gujaJ7QJk0cwJsBFITSBtDK9p0kRJA" ></img>
    </div>
    <div className="bg-gray-400 h-40 ">
    
    </div>

    <div className="bg-orange-400 h-20"> 

    </div>

 {/* Row 1: Logo and Social Icons */}
 <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-700">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Bandage</h2>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-black-400 hover:text-black transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-black-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-black-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
   
    
    
 </div> );}      