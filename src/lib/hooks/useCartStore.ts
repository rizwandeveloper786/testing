// src/lib/hooks/useCartStore.ts
'use client';

import { create } from 'zustand';

interface CartState {
  cart: { id: string; name: string; price: number; quantity: number }[];
  initializeCart: () => void;
  addToCart: (item: { id: string; name: string; price: number; quantity: number }) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  initializeCart: () => set({ cart: [] }),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));