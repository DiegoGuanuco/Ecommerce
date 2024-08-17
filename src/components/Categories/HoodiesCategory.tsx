'use client'
import React from 'react'
import { ProductCard } from '../ProductCard';
import { useAppSelector } from '@/redux/hooks';
import { useFavorites } from '@/hooks/useFavorites';

export default function HoodiesCategory() {
    const hoodies = useAppSelector((state) => state.products.products.hoodies);
    const { handleFavoriteClick } = useFavorites();
  
    return (
      <>
        {hoodies.map((hoodie) => (
          <ProductCard key={hoodie.id} {...hoodie} 
          onFavoriteClick={()=>handleFavoriteClick(hoodie)}
          />
        ))}
      </>
    );
}

