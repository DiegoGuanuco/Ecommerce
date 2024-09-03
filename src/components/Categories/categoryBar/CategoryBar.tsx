"use client";

import Link from "next/link";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useEffect } from "react";

export function CategoryBar() {
  const { categories, getCategories } = useCategoryStore();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav>
      <ul className="w-full flex justify-between px-24 py-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/category/${category}`} className="font-bold">
              {category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
