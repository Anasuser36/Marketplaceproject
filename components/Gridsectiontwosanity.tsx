import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import Link from 'next/link';


export default async function Gridsectiontwosanity() {
  const fetchProducts = `
  *[_type == "productstwo" && new ==true]{
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
    <div className="grid grid-cols-4 gap-6 p-4">

      {/* Grid Item 1 */}

       <div className="  col-span-4" > 
      <h1 className=" text-center text-black font-bold-400"> Featured products  </h1>
      <h1 className="font-bold text-[24px] text-center"> Best Sellers Products  </h1>
      <p className="text-center"> Checkout our Latest Collection of products </p>
       </div>

       
    {sanityData.map((product) => (

      
      <div
        key={product._id}
        className="shadow-md"
      >
       
  
        {/* Product Image */}
        <div className="h-[427px] bg-gray-100">

        <Link  href={`/Productpage/${product.slug.current}`} key={product.slug}>

        <Image
          src={urlFor(product.image).url()}
          alt={product.title}
          width={200}
          height={200}
          className="h-full w-full rounded-t-lg"
        />
      
        </Link>
        </div>

        <div className="p-4">
        {/* Product Info */}
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="text-gray-700 font-semibold">${product.price} {product.dicountPercentage}%off </p>
        <p className="text-sm text-gray-500">Blue</p>
      </div>
      
      </div>
    ))}
  </div>
);
}
        
    