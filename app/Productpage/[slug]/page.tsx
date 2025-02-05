import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ProductCarousel from "@/components/productcrousle";
import { groq } from "next-sanity";

 

const page = async ({params}) => {


 console.log(params.slug)


 const productImages = [
    "/images/post2.png",
    "/images/post1.png",
    "/images/post3.png",
  ];

  const fetchProducts = groq`
  *[_type=="productstwo" && slug.current =='${params.slug}']{
    name,
    description, 
    category,
    image,
     price,
    dicountPercentage,
     productimages[] {
      asset-> {
        url
      }
}
}
  `;

  const sanityData = await client.fetch(fetchProducts)
  if (!sanityData) {
    return <div>Product not found</div>;
  }

  return (
    
    <div className=" grid grid-cols-1 gap-6 p-4">

  

      {/* Grid Item 1 */}

       <div className="  col-span-4" > 
      <h1 className=" text-center text-black font-bold-400"> Product Detail  </h1>

       </div>

       
    {sanityData.map((product) => (

      
      <div
        key={product._id}
        className="  shadow-md"
      >
       
  
        {/* Product Image */}
        <div className="  bg-gray-100">
        <ProductCarousel
        images={product.productimages.map((img: any) => img.asset.url)}
      />
        
        </div>

        <div className="p-4">
        {/* Product Info */}
        <h3 className="text-lg font-bold"> {product.name}</h3>
        <p className="text-gray-500 text-sm"> {product.category}</p>
        <p className="text-gray-700 ">{product.description} </p>
        <p className="text-lg font-bold"> Price : ${product.price}</p>
      </div>
      </div>
    ))}
  </div>
  
);
}

export default page;
        
    