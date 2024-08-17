"use client";
import { useAppSelector } from "@/redux/hooks";
import { IoMdHeartEmpty } from "react-icons/io";

export function Favorites() {
  const counter = useAppSelector((state) => state.favorites.counter);
  return (
    <div>
      <IoMdHeartEmpty />
      <p>{counter}</p>
    </div>
  );
}
