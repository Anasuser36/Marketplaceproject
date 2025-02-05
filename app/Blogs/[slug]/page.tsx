import { client } from '@/sanity/lib/client'
import React from 'react'
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import Link from 'next/link';
import { groq } from "next-sanity";

const page = async ({params}) => {
    console.log(params.slug)

    const fetchBlogs = groq`
    *[_type == "post" && slug.current =='${params.slug}']{
    title,
    body, 
     mainImage,
     slug,
    "authorName": author->name

}
`;

const sanityData = await client.fetch(fetchBlogs)

console.log(sanityData);

return (
    <div className=" grid grid-cols-1 gap-6 p-4">

  

    {/* Grid Item 1 */}

     <div className="  col-span-1" > 
     <h1 className="font-bold text-center text-[30px] text-black"> Blog Details</h1>

     </div>

     {sanityData.map((product) => (

      
<div
  key={product._id}
  className="  shadow-md"
>
 

  {/* Product Image */}
  <div className="  bg-gray-100">

  
  </div>

  <div className="p-4">
  {/* Product Info */}
  <h1 className="font-bold text-left text-[30px] text-black">{product.title}</h1>
  <br></br>
  <Image
          src={urlFor(product.mainImage).url()}
          alt={product.title}
          width={200}
          height={200}
          className="h-[300px] w-[500px] rounded-t-lg"
        />
    <h3 className="text-sml font-bold"> Author: {product.authorName}</h3>      
    <br></br>
  <PortableText value={product.body} />
</div>
</div>
))}

     </div>


);
}
export default page