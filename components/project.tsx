// components/FetchData.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface DataItem {
  id: number;
  name: string;
  email: string;
  title: string;
  Image: string;
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/project.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from JSON file</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link className="cursor-pointer" href={`/posts/${item.id}`}>
              <Image
                src={item.Image} // Dynamically load image from item object
                width={34}
                height={34}
                alt="Horizon logo" // Use item's name for alt text
                className=" img custom-opacity custom-blend  "
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
