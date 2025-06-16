'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/hooks/useCartStore'; // सही पथ

export function useInitializeCart() {
  const initializeCart = useCartStore((state) => state.initializeCart);

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);
}

export const useCart = () => {
  return useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));
}