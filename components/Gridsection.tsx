import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import Link from 'next/link';

export default async function Gridsectionsanity() {
  
  const catvalue1 ="men";
  const catvalue2 ="women"
  const catvalue3 ="accessories"
  const catvalue4 ="kids"
  
 
    const fetchProducts = `
    *[_type == "productstwo"][0...8]{
      name,
      description, 
      category,
      image,
       price,
      dicountPercentage,
      slug
  }
    `;
  
    const sanityData = await client.fetch(fetchProducts)


  
  return (
    <div className="bg-[#FAFAFA] grid grid-cols-4 gap-4 p-4">


      {/* Grid Item 1 */}

      <div className="col-span-4" > 
      <h1 className="font-bold text-[24px] text-center">  Products By Categories</h1>
      <p className="text-center"> Select the product as per your need,we have differnt categories of products</p>
       </div>


     
      <div
        className="h-[500px]  col-span-2 bg-no-repeat  object-cover bg-center row-span-2  "
        style={{ backgroundImage: `url('/images/media bg-cover.png')` }} // Replace with your image path
      >
        <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[426px] ml-32 px-10">
         
        <Link  href={`/Productcategory/${catvalue1}`} >
          <h3 className="text-text  text-2xl font-bold">{catvalue1}</h3>
          </Link>
        </div>
       
      </div>
      

      {/* Grid Item 2 */}
     
      <div
        className="h-[500px] col-span-1 row-span-2 bg-cover bg-center  shadow-md"
        style={{ backgroundImage: `url('/images/griditemsecond.png')` }}
      >
       <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[426px] ml-28 px-10">
       <Link  href={`/Productcategory/${catvalue2}`} >
          <h3 className="text-black text-2xl font-bold">{catvalue2}</h3>
          </Link>
        </div>
      </div>
     

      {/* Grid Item 3 */}
     
      <div
        className="h-[240px] col-span-1  bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url('/images/griditemthird.png')` }}
      >
       <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[171px] ml-10 px-8">
       <Link  href={`/Productcategory/${catvalue3}`} >
          <h3 className="text-black text-2xl font-bold">{catvalue3}</h3>
          </Link>
        </div>
      </div>
      
      {/* Grid Item 4 */}
 
      <div
        className="h-[240px] col-span-1 bg-cover bg-center  shadow-md"
        style={{ backgroundImage: `url('/images/griditemfour.png')` }}
      >
        <div className="bg-white rounded-none  flex h-[48px] w-[170px] mt-[176px] ml-10 px-10">
        <Link  href={`/Productcategory/${catvalue4}`} >
          <h3 className="text-black text-2xl font-bold">{catvalue4}</h3>
          </Link>
        </div>
      </div>
   
     
    </div>
  );
};

