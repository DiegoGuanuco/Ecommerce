"use client";

import { useProductsStore } from "@/store/useProductsStore";
import { useEffect } from "react";
import Image from "next/image";

export function ProductsList() {
  const { getProducts, products } = useProductsStore();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h2>{product.title}</h2>
          <p className="truncate">{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </section>
  );
}
