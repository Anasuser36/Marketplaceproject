import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const fetchProducts = `
  *[_type == "product"]{
  title,
    description, 
     _type,
     productImage
}
  `;

  const sanityData = await client.fetch(fetchProducts)

  console.log(sanityData);
  return (
    <>
    <h1 className="text-center">Products APP</h1>
  
    <div>
      {
        sanityData?.map((product, index) => (
            <div className="bg-gray-200 border border-gray-300 p-4 my-4 text-black">
            <h2 className="text-2xl font-bold">
              
            {product.heading}
            </h2>
  
            <Image
              src={urlFor(product.productImage).url()}
              alt="product image"
              width={500}
              height={500}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))
      }
    </div>
     </>
  
  
  );
 
}