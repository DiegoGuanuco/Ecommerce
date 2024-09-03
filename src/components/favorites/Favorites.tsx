"use client";
import { useProductsStore } from "@/store/useProductsStore";
import { IoMdHeartEmpty } from "react-icons/io";

export function Favorites() {
  const { favorites } = useProductsStore();

  return (
    <div>
      <IoMdHeartEmpty />
      <p>{favorites}</p>
    </div>
  );
}
