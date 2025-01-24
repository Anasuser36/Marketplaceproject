import React from "react";

const Header = async () => {
  type IProduct = {
    id: number;
    Productname: string;
    Description: string;
    Prie: number;
  };

  const response = await fetch("https://6782ab94c51d092c3dd0625a.mockapi.io/api/anas1/Inventory");

  const products: IProduct[] = await response.json();

  console.log(products);

  return (
    <>
      <div className="text-2xl text-center font-bold">Products Library</div>
      <div></div>

      <div className="flex justify-between">
        {products.map((item, index: number) => {
          return (
            <div key={index} className="border-2 border-black">
              <p>{item.Productname}</p>
              <p>{item.Description}</p>
              <p>{item.Prie}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;