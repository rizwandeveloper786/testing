// src/components/sections/Header/Header.tsx
'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/hooks/useCartStore';

export default function Header() {
  const { cart } = useCartStore();
  return (
    <header className="bg-shifavedaGreen text-black p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-black">
            ShifaVeda
          </Link>
        </div>
        <div>Cart ({cart.length})</div> {/* cart का उपयोग */}
      </nav>
    </header>
  );
}