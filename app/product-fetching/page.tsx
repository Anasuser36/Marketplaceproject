"use client";
import React, { useEffect, useState } from "react";

interface ITodo {
  userId: number;
  id: number;
  Description: string;
  Productname: string;
}

const page = () => {
  const [data, setData] = useState<ITodo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6782ab94c51d092c3dd0625a.mockapi.io/api/anas1/Inventory"
      );
      const books: ITodo[] = await response.json();
      setData(books);
      console.log("books data>>", books);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-2xl text-center font-bold">Todo list</div>
      <div></div>

      <div className="flex flex-col justify-between">
        {data.map((item, index: number) => {
          return (
            <div key={index} className="border-2 border-black">
              <p>{item.Productname}</p>
              <p>{`${item.Description}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;